import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import PageTitle from '../components/page-title';

const IndexPage = ({ location: { pathname } }) => (
  <Layout location={pathname}>
    <SEO
      title={'Uses'}
      description={'The applications, tools, and the hardware I use.'}
      slug={'/uses/'}
      keywords={['uses', 'tools', 'apps', 'hardware']}
    />
    <PageTitle>Uses</PageTitle>
    <h3>Text Editor</h3>
    <img src="/uses/vscode.png" alt="VSCode" />
    <p>
      I use Visual Studio Code for all sorts of development. I have swapped it
      for PHPStorm for Drupal development as xDebug works flawlessly and I don't
      have to worry about my laptop overheating.
    </p>
    <p>
      The UI and syntax theme I'm using is{' '}
      <a href="https://marketplace.visualstudio.com/items?itemName=ph-hawkins.arc-plus">
        Arc+
      </a>
      . It's gentle on my eyes and as an added bonus it matches the OS UI too.
    </p>
    <p>
      I use the{' '}
      <a href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync">
        Settings Sync
      </a>{' '}
      plugin to backup the editors settings and extensions to GitHub Gists. You
      can find them{' '}
      <a href="https://gist.github.com/skippednote/a4941812b738bd775f37bfe1289d37a0">
        here
      </a>
      .
    </p>
    <h3>Terminal</h3>
    <img src="/uses/terminal.png" alt="Terminal" />
    <p>
      Gnome Terminal is the terminal of my choice. It's the default terminal
      that comes with Ubuntu and isn't half bad at customizations.
    </p>
    <p>
      I've swapped bash for zsh and use oh-my-zsh with a few third party
      plugins. I'm using{' '}
      <a href="https://github.com/denysdovhan/spaceship-prompt">Spaceship</a>{' '}
      prompt theme and{' '}
      <a href="https://github.com/arcticicestudio/nord-gnome-terminal">Nord</a>{' '}
      for terminal color scheme. You can find all my dotfiles{' '}
      <a href="https://github.com/skippednote/dotfiles/">here</a>
    </p>
    <h3>Editor Font</h3>
    <img src="/uses/space-mono.png" alt="Typeface" />
    <p>
      I've been using Space Mono for years now. It's my goto monospace font. I
      use it with my text editor, terminal, and for code snippets on this
      website.
    </p>
    <p>
      Also, it's cost $0. You can get it from{' '}
      <a href="https://fonts.google.com/specimen/Space+Mono">Google Fonts</a>.
    </p>

    <h3>Operating System</h3>
    <img src="/uses/os.png" alt="Operating System" />
    <p>
      After using various MacBook's for the last 6 years, in 2017 I bought a
      Dell XPS 13. It came preinstalled with Windows 10 which I did like and
      used for a couple of months until hiting a wall. The WSL support is still
      rudimentry and they have a long way to go. Failing to achive anything
      close to a decent developer experience I switched to Ubuntu 18.04 and now
      18.10.
    </p>
    <p>
      Ubuntu is really fast compared to macOS and Windows but it comes at a
      cost. The OS isn't polished like it's counterparts and I run into bugs
      every now and then especially related to HiDPI screen scaling and
      bluetooth audio.
    </p>
    <p>
      If you are a designer or a front-end developer then Ubuntu isn't for you.
      You can't open design files (like Sketch, Figma, or Photoshop) and the
      chores it take to keep the OS functioning are too high. I'm considering
      moving to MacBook Pro sometime next year.
    </p>

    <h3>Hardware</h3>
    <img src="/uses/setup.jpg" alt="Hardware setup" />
    <p>
      I'm using a Dell XPS 13" (2017 edition) with 16GB RAM and 512MB SSD. Here
      is my not so positive{' '}
      <a href="https://twitter.com/skippednote/status/979571417573453824">
        review
      </a>
      . Do take it with a grain of salt considering this is from when I was
      using Windows on it.
    </p>
    <p>Here is the assorted list of other products I use day to day.</p>
    <ul>
      <li>Dell 21" monitor</li>
      <li>Logitech MK850 Combo</li>
      <li>Audio Techinca M50x</li>
      <li>Blue Snowball iCE</li>
      <li>Bullet Wireless earphones</li>
      <li>OnePlus 6T</li>
    </ul>
    <img src="/uses/phone.jpg" alt="Mobile setup" />

    <hr />
    <Bio />
  </Layout>
);

export default IndexPage;
