---
order: 4
---

# Trading Bot

## Use Hummingbot on ViteX

:::tip ViteX API Key
If you don't have a ViteX API Key, please go to [https://x.vite.net/](https://x.vite.net/tradeOpenapi) to generate one. After acquiring an API private key, you are required to authorize delegation of selected trading pairs and pledge enough VITE for Quota to the delegated address.
:::

The following instructions are for Linux. You can execute in a virtualVM in AWS Cloud or simply using [VirtualBox](https://virtualbox.org) on a Mac or PC.

### Install Hummingbot with Docker

#### Install Docker

```bash
# 1) Download Docker install script
wget https://raw.githubusercontent.com/hummingbot/hummingbot/master/installation/install-docker/install-docker-ubuntu.sh

# 2) Enable script permissions
chmod a+x install-docker-ubuntu.sh

# 3) Run installation
./install-docker-ubuntu.sh
```

#### Install Hummingbot

```bash
# 1. Download Hummingbot create, start, and update scripts
wget https://raw.githubusercontent.com/LeonardoBill/hummingbot/vitex-connector-patch-1/installation/docker-commands/create.sh
wget https://raw.githubusercontent.com/LeonardoBill/hummingbot/vitex-connector-patch-1/installation/docker-commands/start.sh
wget https://raw.githubusercontent.com/LeonardoBill/hummingbot/vitex-connector-patch-1/installation/docker-commands/update.sh

# 2. Grant permissions
chmod a+x *.sh

# 3. Create a hummingbot instance
sudo ./create.sh
```

#### Start Bot

```bash
sudo ./start.sh
```

### Install Hummingbot from Source
```bash
# 1) Install dependencies
sudo apt-get update
sudo apt-get install -y build-essential

# 2) Install Miniconda3
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
sh Miniconda3-latest-Linux-x86_64.sh

# 3) Reload .bashrc to register "conda" command
exec bash

# 4) Clone Hummingbot
git clone https://github.com/vitelabs/hummingbot.git

# 5) Install Hummingbot
cd hummingbot && git checkout feat/vitex-connector && ./clean && ./install

# 6) Activate environment and compile code
conda activate hummingbot && ./compile

# 7) Start Hummingbot
bin/hummingbot.py
```

### Connect Hummingbot with ViteX Connector

#### Add Hummingbot ViteX Connector
Visit [Hummingbot ViteX Connector](https://github.com/vitelabs/hummingbot/blob/feat/vitex-connector/documentation/docs/connectors/vitex.md)


#### Configure Hummingbot

Visit [Hummingbot configuration](https://docs.hummingbot.io/operation/password)

#### Useful Links
[Hummingbot MM on ViteX Exchange, Windows, Linux, or on VPS for Newbie](https://www.youtube.com/watch?v=zX41hng1Mq4)

### Tips
- Recommend to stake 2000 VITE to your agent address for Quota, otherwise when the bot frequently places or cancels orders(if order_refresh_time < 60s), there may be lack of Quota which will result in placing/canceling order failed.
- You must fill in your origin Vite address rather than the agent address when it prompts `Enter your Vite address`.
