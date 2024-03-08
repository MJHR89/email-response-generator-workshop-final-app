# Building Conversational AI Apps in Slack - workshop final app

This is a project used for demonstration purposes for the Building modular Slack apps: Integrating generative AI workshop.

## Workshop Setup

### Download the Slack CLI
Install the Slack CLI - [Instructions](https://api.slack.com/automation/quickstart)
  Paste this command into your Mac terminal or Windows PowerShell to install the Slack CLI:

    Mac: `curl -fsSL https://downloads.slack-edge.com/slack-cli/install.sh | bash`

    Windows: `irm https://downloads.slack-edge.com/slack-cli/install-windows.ps1 | iex`

    **Windows users!**
    You may need to upgrade Powershell to work with the Slack CLI:
      One liner to install Powershell 7:
      - Open Powershell
      - Paste the following to install Powershell 7:
        `iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI"`

    **Learn more:**
      [Install Powershell on Windows (Microsoft)](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4&WT.mc_id=THOMASMAURER-blog-thmaure#install-powershell-using-winget-recommended)
      [How to install or update Powershell 6](https://www.thomasmaurer.ch/2019/03/how-to-install-and-update-powershell-6/)

### Download VSCode
The CLI is optimized to work with this editor, so we highly recommend using it (even if you typically use something else).

### Test in a workspace
Free sandboxes to test your app available by signing up to the developer program. Plus so much more support and developer tools! Grab yours [here](https://api.slack.com/developer-program)!

### Join the workshop's channel
If you joined the Slack workshops workspace, search for #tdx24-ai-app-workshop where we'll be sharing all the instructions and code snippets for the workshop. If you have any question please leave it in channel.

### Create a Personal Channel for Testing
Once you’ve joined the workspace, create a channel named testing-yourName

### OpenAI keys
You can create them [here](https://platform.openai.com/api-keys).


## Clone the Template

Start by cloning this repository, to build at your own rhythm:

```zsh
# Clone this project onto your machine
$ slack create my-app -t MJHR89/email-response-generator-workshop

# Change into the project directory
$ cd my-app
```

## The Slides
Step by step instructions from the [presentation](https://jmp.sh/LoOS103Y)

## JOIN THE DEVELOPER PROGRAM
Sign up for the developer program [here](https://api.slack.com/developer-program)!
Events, newsletter, sandboxes, and so much more!!

## Feedback
Leave us some feedback about the workshop session at TDX24 [here](https://www.surveymonkey.com/r/TDX24HOW). We would love to hear from you!