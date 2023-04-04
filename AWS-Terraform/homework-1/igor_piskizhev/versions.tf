terraform {
  required_version = ">= 1.0.1"
  required_providers {
    aws = {
      version = ">=3.0.0"
      source  = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}