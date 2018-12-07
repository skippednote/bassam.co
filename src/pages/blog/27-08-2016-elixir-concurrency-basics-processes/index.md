---
date: "2016-08-27"
title: "Concurrent Elixir: Processes"
path: "/concurrent-elixir:-processes"
---

## Introduction

Processes are the bread and butter of Elixir's concurrency. Unlike operating system threads, Elixir has green threads which are efficient and light on resources. These processes communicate and synchronize with each other by _message passing_. It is a common pattern among Elixir and Erlang developers to spin up thousands of processes without worrying about performance as processes are isolated and memory is cleared with every process that ends or is killed.

## Creating Processes

You use the `spawn` function to create a new processes in Elixir. It can either take an anonymous function or a module method with arguments. This will create a new process from the current running process in the Beam VM. However, it won't be linked to current process in any way and it won't share any data with it. All the variables needed will be copied to the newly created process.

#### Using Anonymous Function

```elixir
spawn fn ->
  IO.inspect "Process body here."
end
```

#### Using Module Function

```elixir
spawn Module, :function, [arg1, arg2]
```

## Messaging

Elixir uses Erlang and it's Beam VM to harness concurrency powers which is based on the [Actor Model](https://en.wikipedia.org/wiki/Actor_model). Information is passed between processes by sending messages to their Process ID.

### PID

Every time you create a new process, you get a `pid` as the return value. `pid` or Process ID is a data type in Elixir which you can use to work with processes. You can use it to check a process's status, to send messages to it, to kill it, and do a lot more with it. You can get the `pid` of the current process using the `self` function.

```elixir
pid = spawn Module, :function, [arg1, arg2]
pid2 = spawn fn -> IO.inspect "Current Process: #{self}." end
```

### Sending Messages

You send messages to a process by using the `send` macro. You pass it the `pid` of the process you want to send messages to and the `message` you want to send. The `message` can of any data type but its common in the Elixir community to send an atom or a tagged tuple which you can pattern match and check errors on.

```elixir
pid = spawn Account, :add, []
send pid, {:deposit, 1_000_000}
```

### Receiving Messages

You use the `receive` macro to handle all the messages that land in the mailbox of your processes. You can handle all messages that you receive in a similar fashion or you can pattern match based on the message and handle it appropriately.

#### Generic Receive

```elixir
receive do
  message ->
    IO.inspect "Generic method to handle all the messages: #{message}."
  end
end
```

#### Pattern Match Receive

```elixir
receive do
  {:ok, data} ->
    IO.puts "Received data: #{data}."
  {:error, reason} ->
    IO.puts "Failed to get data: #{reason}."
  end
end
```

`receive` will keep running in background; waiting for new messages. However, you can specify how long to wait using the `after` block in `receive` macro.

```elixir
receive do
...
after 500 ->
  IO.puts "Didn't get any messages."
end
```

### Example

You can use processes for running tasks in parallel which if run one after another would take a long time to complete. A simple problem to tackle would be a parallel file downloader. You give it a collection of urls and it will download the files in parallel taking only a fraction of time to complete compared to what it would take when done linearly.

#### Code Sample

```elixir
defmodule Downloader do
  def pget(url) when is_list(url) do
    url
    |> Enum.map(&spawn_process(&1, self))
    |> Enum.map(&await/1)
  end

  defp spawn_process(url, parent) do
    spawn_link fn ->
      case HTTPoison.get(url) do
        {:ok, %HTTPoison.Response{body: body, headers: \_headers, status_code: 200}} ->
          send parent, {:ok, body}
        {:error, %HTTPoison.Error{reason: reason}} ->
          send parent, {:error, "Failed: #{reason}."}
        _ ->
          send parent, {:error, "Failed."}
      end
    end
  end

  defp await(pid) do
    receive do
      {:ok, body} ->
        File.write("./#{:rand.uniform(1_000_000)}.html", body)
      {:error, reason} ->
        IO.puts "#{reason}"
    end
  end
end
```

#### Explanation

The `Downloader` module has a `pget` method which will take a collection of urls. `pget` has a guard clause `when is_list(url)` which makes sure that the method is only called when you give it a `list` as an argument.

This collection of urls is enumerated over and passed to `spawn_process` which will request the content from the given `url` using the [HTTPoison](https://github.com/edgurgel/httpoison) library. The `pid` of the parent process is also passed to the `spawn_process`. `spawn_process` pattern matches on the response it gets and forwards it to the parent `pid` using the `send` macro with appropriately tagged tuple as the message.

After passing through `spawn_process`, `await` handles all the messages received to the parent processes from the processes that were created using `spawn_process`. If the response is a `:ok` tuple then it is saved to a file with a random name otherwise we log an error to the `stdout`.

Its important to note that creating a new process takes a few microseconds and it can lead to delay when working on tasks that end immediately. In such cases working instead one process can have faster results.
