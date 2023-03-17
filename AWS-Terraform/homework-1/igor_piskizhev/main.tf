data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }

  user_data = <<EOF
  #!/bin/bash
  sudo apt-get update
  sudo apt-get install -y nginx
  sudo service nginx start
  EOF

  key_name = aws_key_pair.deployer.key_name

  vpc_security_group_ids = [aws_security_group.allow_ssh.id]
  subnet_id = aws_subnet.main.id
  associate_public_ip_address = true

}
resource "aws_key_pair" "deployer" {
  key_name   = "deployer-key"
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC843SWrVL+WYYvdwYKWSd+VPsx3NUu+MY67Mj1sdHZ27Yuljf/HvXtW+n/AePxvFjVDLxTvvKX0k66KrhNTxQW0MmAtyTOvyRIFCVFif/fzQNarOapMSgnzkBGijnDIpHK6FbyJrRuhNdUJnXgNtkj3AJkXH94ttt4QbhWnlVScmd93Kdzg32EMSwevS+MK8Fug/pgsEPa5BbLmEU0gjukn3zTrYHPPRtThCu3NNCb8DXvF83RakWtmD1Adv1SK7gOxNYq/oqOoVXyfOYWizyHzkh7DXp876MZN9WxCv7gYdIyMQwXqvcoGVVKTDdVto6UTxJFPF98YyTK4m0QI65zj1DovE9fIfoAaFzpfpNXpVz7RmEkidBKm1z4pmpcbchsotn4+c4WwhIgyEnY8cNrpymHVT/gW7kNghrZuJCZUfcjvsFZY9LLbzjL5VE6Xy01qgzTTieneor7xITx+ouGbjRjk1cb6qvE4RN7wj1VX4OiR5vJeY6HRvPpt7CzhVc= igorpiskizhev@Ihar-Piskizhau.local"
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id

  tags = {
    Name = "main"
  }
}