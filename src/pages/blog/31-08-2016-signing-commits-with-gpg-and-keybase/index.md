---
date: "2016-08-31"
title: "Signing commits with GPG and Keybase"
path: "/signing-commits-with-gpg-and-keybase"
---

## Introduction

Git can be easily hacked to alter the integrity of the respository. Changing author details and code history are just a rebase away.

```bash
$ git commit --author Linus Torvalds <mailto:linus@linux.com>
```

To validate commits and tags you can sign them with GPG keys. GPG allows you to encrypt and sign messages/data using a pair of keys: public which can be shared over the internet and a private key, that you keep safe on your machine.

You can use Keybase for managing your GPG keys. This is apart from the functionality it provides, like encrypted messaging and file sharing.

## Setup

You will need GPG and Keybase installed to get started. If you are on macOS you can use Homebrew. You will also need an account on [keybase.io](https://keybase.io). This needs an invite to sign up and I've a bunch of invites in my account, so hit me up on [Twitter](https://www.twitter.com/skippednote) if you need to one.

```bash
$ brew install gpg keybase
$ keybase login
```

## Adding Keys

Once you have your Keybase account setup and all the dependencies installed you will need pull your private and secret keys from Keybase into local installation of GPG.

```bash
$ keybase export | gpg --import
$ keybase export -s | gpg --import
```

There should be two keys added in GPG under the email address used for Keybase and you check them using `gpg --list-keys`. Now you need to update the user details using `adduid`. Make sure to add a comment if both Keybase and GitHub email address are same.

```bash
$ gpg --edit-key skippednote@gmail.com
gpg > adduid
Real Name: Bassam Ismail
Email address: skippednote@gmail.com
Comment: Github
```

## Update Git

You will need to tell Git to use the recently generated GPG keys. This can be done by setting the `siginingkey` to the public key SHA pulled from Keybase. To check the SHA use `gpg --list-keys`.

```bash
$ gpg --list-keys
/Users/skippednote/.gnupg/pubring.gpg

---

pub D093R/V2A067X 2016-07-21
uid [ unknown] Bassam Ismail <mailto:skippednote@gmail.com>
uid [ unknown] Bassam Ismail (Bassam's macbook pro) <mailto:skippednote@gmail.com>
sub **\***/**\*\*\*\*** 2016-07-21 [expires: 2024-07-19]
sub **\***/**\*\*\*\*** 2016-07-21 [expires: 2024-07-19]
```

Use the hash followed by `/` in the public key to set the `signingkey`.

```bash
$ git config --global user.siginingkey V2A067X
```

## Sigining Commits ands Tags

To sign commits you will need to use the `-S` and `-s` flag when creating commits and tags.

```bash
$ git commit -S -m "Feature 1: Add new page"
$ git tag -s "Release v1"
```

## Verifying

You can verify if your commits has been signed by checking the log with the `--show-signature` flag or use the GitHub UI.

![](/images/blog/signing-commits-with-gpg-keybase.jpg)
