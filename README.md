# ArkTech Website

> Website: [Click here](https://ark-tech.netlify.app)\
> Docker Image: [Click here](https://hub.docker.com/r/arkapravoghosh1/arktech-website)

## Build Prerequisites
- [Node.js](https://nodejs.org/en/) (v18.15.0 or higher)
- [Git](https://git-scm.com/downloads) (v2.33.0 or higher)
> Optional: [Docker](https://docs.docker.com/engine/install/) (v20.10.8 or higher)

```bash
git clone https://github.com/ArkTechOrg/arktech-website.git
```

## Setting up the project

To set up the project on your local machine, follow these steps:

1. Navigate to the project directory in your terminal.

```bash
cd arktech-website
```

2. Run the following command to install the required node modules:

```bash
npm i
```

3. Once the node modules have been installed, you can start the project in development mode by running:

```bash
npm run dev
```

This will start the development server, and you can view the project by navigating to `http://localhost:3000` in your browser.

## Building the project for production

To build the project for production, run the following command:

```bash
npm run build
```

This will create a `dist` folder containing the optimized production-ready files. You can then deploy these files to your server.

## Serve the build for testing
1. Install the `serve` package globally

```bash
npm i -g serve
```

2. Serve the build

```bash
serve -s dist
```

## Deploying in Docker
#### Building the docker image and deploying it in a container
- Make sure your present working directory is the root directory of the project
- `docker build -t arktech-website:latest .` to build the docker image
<details>
    <summary>Using Docker Run</summary>

- `docker run --rm --name irlamigo-website -p 443:443/tcp -p 80:80/tcp -d arktech-website:latest` to deploy the docker image into a container
</details>
<details>
    <summary><b>Alternate:</b> Using Docker Compose</summary>

- `docker-compose up -d` to deploy the docker image into a container
</details>

> The website will be available at [https://localhost](https://localhost)

<details>
    <summary>Optional: Using a custom docker registry</summary>

### Enable the Docker registry service
- `docker run -d -p 5000:5000 --restart=always --name registry registry:2` (Run this command only once)
### Tag and push the image to the registry
- `docker tag arktech-website localhost:5000/arktech-website:latest`
- `docker push localhost:5000/arktech-website:latest`
### Deploy the image from the registry
- `docker run --rm --name arktech-website -p 443:443/tcp -p 80:80/tcp -d localhost:5000/arktech-website:latest`

</details>

**WARNING:** Doing so would expose the project to local network. Make sure you're connected to your own secure network to protect from undiscovered security vulnerabilities and to maintain the privacy of this project, or consider using a firewall for safety reasons
#### Removing the docker container and image
- `docker container stop arktech-website` to stop the docker container
> **NOTE**: If you started the container using Docker Compose, run `docker compose down` instead.
- `docker image rm arktech-website:latest` to remove the image

## Deploy prebuilt docker image

```bash
docker pull docker.io/arkapravoghosh1/arktech-website:latest
docker run --rm --name arktech-website -p 443:443/tcp -p 80:80/tcp -d arkapravoghosh1/arktech-website:latest
```

## Conclusion

That's it! You should now have the project up and running on your local machine. If you encounter any issues, please refer to the project's documentation.
