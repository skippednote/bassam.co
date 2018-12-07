---
title: "Configuring Emacs for Rust"
layout: post
description: A guide on how to configure Emacs for working with Rust.
categories: emacs
---

### Introduction
Emacs has a *rust-mode* which provides syntax highlighting and elisp functions to move around function definitions. There are a few more packages that provide additional functionality like auto completion and live syntax checking, however while configuring these I faced a few roadblocks which I would like to document so I can come back here later and use this as a reference or perhaps it might be handy for someone else facing similar issues.

![](/images/emacs-base.png)

### Installing packages
To install the packages required for Rust you would need *melpa* repository added to your packages archive list. You can do so by adding the following snippet to your `init.el` file in `~/.emacs.d`.

~~~elisp
;; Add melpa repository to archives
(add-to-list 'package-archives
    '("melpa" . "http://melpa.milkbox.net/packages/") t)

;; Initialize packages
(package-initialize)
~~~

To re-evaluate the changes you made in your `init.el` and update the packges list, run the following commands:

- `M-x eval-buffer`
- `M-x package-refresh-contents`

You should now be good to install packages to start working with Rust. So do a `M-x package-list-packages` and mark the following packages to install using `i` and once all the packages are selected use `x` to execute the installation.

- `company`
- `company-racer`
- `racer`
- `flycheck`
- `flycheck-rust`
- `rust-mode`

Add the following snippets to your `init.el`:

~~~elisp
;; Enable company globally for all mode
(global-company-mode)

;; Reduce the time after which the company auto completion popup opens
(setq company-idle-delay 0.2)

;; Reduce the number of characters before company kicks in
(setq company-minimum-prefix-length 1)
~~~

~~~elisp
;; Set path to racer binary
(setq racer-cmd "/usr/local/bin/racer")

;; Set path to rust src directory
(setq racer-rust-src-path "/Users/YOURUSERNAME/.rust/src/")

;; Load rust-mode when you open `.rs` files
(add-to-list 'auto-mode-alist '("\\.rs\\'" . rust-mode))

;; Setting up configurations when you load rust-mode
(add-hook 'rust-mode-hook

     '(lambda ()
     ;; Enable racer
     (racer-activate)
  
	 ;; Hook in racer with eldoc to provide documentation
     (racer-turn-on-eldoc)
	 
	 ;; Use flycheck-rust in rust-mode
     (add-hook 'flycheck-mode-hook #'flycheck-rust-setup)
	 
	 ;; Use company-racer in rust mode
     (set (make-local-variable 'company-backends) '(company-racer))
	 
	 ;; Key binding to jump to method definition
     (local-set-key (kbd "M-.") #'racer-find-definition)
	 
	 ;; Key binding to auto complete and indent
     (local-set-key (kbd "TAB") #'racer-complete-or-indent)))
~~~

![](/images/emacs-error-checking.png)

### Installing Racer
Now that you have your Emacs setup, you will setup Racer which provides auto completion backend for *company*.

#### Installing Rust
In case you don't have Rust installed on your system you can install it either by:

- Downloading the installation binary from [Rust's website](https://www.rust-lang.org/install.html).
- or using *Homebrew*: `brew install rust`.

#### Generating Racer binary
To generate the Racer binary that `company-racer` would use, you will clone the *racer* repository from Github to your home directory and run `cargo build --release`.

- `git clone https://github.com/phildawes/racer.git ~`
- `cd ~/racer`
- `cargo build --release`
- `mv ~/racer/release/racer /usr/local/bin`
- `rm -rf ~/racer`

After running these commands and restarting your terminal you should be able to run the `racer` command which should prompt you to setup `$RUST_SRC_PATH`.

#### Setting $RUST_SRC_PATH
If you go back to the *elisp* function you added to our `init.el` earlier you will be able to see that you defined `racer-rust-src-path` which points to `.rust/src` in your home directory. You will need to add the Rust source code there so Racer can use that to load methods for completion.

- `git clone https://github.com/rust-lang/rust.git ~/.rust`
- Restart emacs and open a Rust file.

![](/images/emacs-completion.png)

### Conclusion
With this you are all set to start writing Rust in Emacs. You should have:

- Syntax highlight and indentation
- Auto completion
- Error checking
- Jump to definition
- Inline documentation

![](/images/emacs-jump.gif)
