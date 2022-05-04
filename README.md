# FeedbackAppReact
Uma aplicação de feedback robusta e com aquele toque de acessibilidade que foi desenvolvida pela Rocketseat na NLW Return e editada por mim usando Node, React, Vite, Typescript, Tailwindcss, Popover-Headless UI, Phosphor-icons e html2canvas.

Links interessantes e pertinentes ao projeto:

Rockeseat
https://www.rocketseat.com.br/

Tailwindcss
https://tailwindcss.com/docs/installation/using-postcss

PhosphorIcons
https://github.com/phosphor-icons/phosphor-home

Popover-HeadlessUI
https://headlessui.dev/react/popover

Segue o melhor guia de instalação do Node que me deparei até hoje, obrigado Rocketseat!!

Faala Dev!

Nesse guia você terá o passo a passo da instalação do **Node.js** para cada um dos sistemas operacionais mais usados e, além disso, também a instalação do Yarn que é um gerenciador de pacotes para usarmos como alternativa ao NPM, beleza?

Iremos também disponibilizar o link de onde você pode estar consultado [diretamente da fonte](https://nodejs.org/en/download/package-manager/) o guia de instalação do Node.js para diversos sistemas.

Ah e mais uma coisinha! As instalações para todos os sistemas operacionais serão feitas usando um gerenciador de pacotes específico para cada um. Isso vai facilitar na hora de atualizar as versões do Node.js ou até mesmo desinstalar da sua máquina.

# Node.js

## Linux (Ubuntu/Debian)

Para o Linux iremos utilizar o **[NodeSource](https://github.com/nodesource/distributions/blob/master/README.md)**, basta seguir esses passos:

- Verifique se você possui o **[curl](https://curl.haxx.se/)** instalado rodando no terminal o comando:

```bash
curl --version
```

Caso ele retorne a versão, pode pular para o próximo passo. Caso não, basta rodar o comando:

```bash
sudo apt install curl
```

- Com o **curl** instalado, execute o comando de instalação da versão LTS mais recente disponível:
    - Ubuntu
    
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
    
    - Debian (como root)
    
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get install -y nodejs
    ```
    
    Feche o terminal e abra novamente para as alterações fazerem efeito.
    
- Por fim, execute os seguintes comandos no terminal:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso!

## macOS

Para o MacOS, utilizaremos o binário padrão disponibilizado no site oficial, para isso acesse esse [link](https://nodejs.org/en/) e baixe a versão **LTS**. Em seguida, abra o arquivo .pkg baixado e prossiga com a instalação que será basicamente clicar em “continuar” até finalizar a instalação. Quando concluir, abra o seu terminal e execute os seguintes comandos:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso!

## Windows

Para o Windows utilizaremos o gerenciador de pacotes **[Chocolatey](https://chocolatey.org/)**, porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.

- **CMD**: também conhecido como **Command Prompt**, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o **MS-DOS**) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao **CMD**, tornando-o popular atualmente.

Escolhido o shell, vamos começar a instalação:

- Busque no campo de busca do Windows por **Windows Powershell**, clique com o botão direito em cima do programa e escolha a opção **Executar como administrador**.
- O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa.

Execute o seguinte comando:

```bash
Get-ExecutionPolicy
```

Caso ele retorne `Restricted`, execute o comando:

```bash
Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos`

<aside>
⚠️ Caso o comando acima apresente erro, tente usar:

`Set-ExecutionPolicy Bypass -Scope Process`

</aside>

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
Get-ExecutionPolicy
```

Alterada a permissão, basta instalar o **Chocolatey** com o comando:

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

<aside>
⛔ Caso o comando acima apresente um erro, verifique se a sua máquina atende às requisições mínimas

`Windows 7+ / Windows Server 2003+
PowerShell v3+
.NET Framework 4.5+`

Caso o erro apresentado seja `Exceção ao definir "SecurityProtocol": "Não é possível converter o valor "3312"`, siga **[esse guia](https://blog.chocolatey.org/2020/01/remove-support-for-old-tls-versions/)**

</aside>

- Após o fim da instalação, feche e abra o Windows Powershell como administrador novamente e execute:

```bash
choco -v
```

Caso ele retorne a versão do **Chocolatey**, a instalação foi um sucesso. 

Agora, para instalarmos o Node.js é recomendado, pelo próprio [site do Node](https://nodejs.org/en/download/package-manager/#windows), usarmos o **[nvs** (Node Version Switcher)](https://github.com/jasongin/nvs). Com ele é possível ter diversas versões do Node instaladas simultaneamente e escolher qual versão você deseja usar. Para instalar o **nvs** execute:

```bash
choco install nvs
```

E escolha a opção `[A]ll - yes to all`

Após isso, reinicie o Powershell e execute:

```bash
nvs add lts
```

Com isso, o nvs irá baixar e instalar a versão LTS do Node.js (atualmente a v16) mas ainda será necessário informar ao nvs que é essa versão que desejamos usar. Para isso:

```bash
nvs link lts
```

Se o comando rodou sem erro, passe para o [próximo passo](https://www.notion.so/Instalando-o-Node-js-f00c900c9c584026ba153dbe67dd2c50). Caso seja retornado algum erro como: 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ab7ca0e-2cba-4ab5-a634-8c7c9f06f311/Untitled.png)

Você pode rodar o comando:

```json
nvs ls
```

Esse comando vai retornar as versões do Node que você possui instalada. Basta copiar a versão (como no exemplo a v16) e adicionar na frente do comando `nvs link`:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b5aa4c7d-c0ee-4938-96ab-3980b110b3d1/Untitled.png)

```json
nvs link **node/16.13.0/x64**
```

Após isso, feche e abra o Powershell novamente e execute:

```bash
node -v
npm -v
```

Caso retorne as versões do Node e npm, sua instalação foi um sucesso!
