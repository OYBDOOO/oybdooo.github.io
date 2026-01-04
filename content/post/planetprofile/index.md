---
title: Local Setup & Quick Start of PlanetProfile
summary: How I setup & start the PlanetProfile model on my Mac. For the course "Basics of Planetary Sciences"
date: 2025-01-04

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:

authors:
  - Boding Ouyang

tags:
  - Software
  - Planetary Science
---

## 0. Statement

This blog record how I setup and start the [PlanetProfile](https://github.com/vancesteven/PlanetProfile/tree/v2.5.0) model on my Apple Silicon Mac. If you read it, you can just regard it as a pure nothing-installed machine. I wrote this blog just for my course report for "Basics of Planetary Sciences". It is near the deadline, I need to work hard T_T

## 1. Setup Latex Environment

PlanetProfile needs Latex for plot on the Mac, but Latex is soooo big (My Mac only have 256Gb storage T_T). Install basictex is enough.

```zsh
brew install --cask basictex 
```

We need to add the path of Latex in zshrc by ourselves.

```zsh
vim ~/.zshrc
```

Then add the following in zshrc (for every Mac, the path maybe has difference):

```zsh
export PATH="/usr/local/texlive/2025basic/bin/universal-darwin:$PATH"
```

Then we activate zshrc:

```zsh
source ~/.zshrc
```

We can then test whether Latex is added successfully.

```zsh
latex
```

If it outputs the info, that means correct!

We need to add some packages to Latex. I don't know whether the package are all needed, but if you install like this, the model can run.

```zsh
sudo tlmgr update --self
sudo tlmgr install latexmk amsmath amsfonts amssymb dvipng
sudo tlmgr install type1cm cm-super
sudo tlmgr install mhchem siunitx
sudo tlmgr install stix
```

## 2. Setup Python Environment

Setup a clean conda environment, and activate it.

```zsh
conda create -n planetprofile python=3.11 -y
conda activate planetprofile
```

Then add the package PlanetProfile and some other package to the conda.

```zsh
conda install "numpy<2.0"
conda install scipy matplotlib mpmath
conda install -c conda-forge gsw obspy spiceypy cmasher
pip install PlanetProfile
```

## 3. Quick Start

Git clone the model and change it to a stable version.

```zsh
git clone https://github.com/vancesteven/PlanetProfile.git
cd PlanetProfile
git checkout v2.5.0
```

Run directly.

```zsh
python -m PlanetProfile.Main Europa
```

Sometimes, it will give you instructions on install other things, just follow it.

## 4. Notes

This blog is only a quick start guide of the model......