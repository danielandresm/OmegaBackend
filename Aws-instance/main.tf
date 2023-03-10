terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-2a"
}

resource "aws_instance" "serverbackend" {
  ami           = "ami-0f3c9c466bb525749"
  instance_type = "t2.micro"

  tags = {
    Name = "fullstackbook-todo-nestjs"
  }
}

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.13.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.latest
  name  = "fullstackbook"
  ports {
    internal = 80
    external = 3000
  }
}
