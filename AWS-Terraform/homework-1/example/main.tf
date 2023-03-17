data "aws_ami" "ubuntu" {
  most_recent = true
  # ubuntu ami account ID
  owners = ["099720109477"]
}


resource "aws_instance" "this" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = "t2.micro"
  subnet_id              = aws_subnet.this.id
  vpc_security_group_ids = [aws_security_group.instance.id]
  key_name               = aws_key_pair.this.key_name
  user_data              = <<EOF
    #!/bin/bash
    apt-get-update && apt-get install -y nginx
    service nginx start
    EOF

}

resource "aws_key_pair" "this" {
  public_key = "<your ssh public key (id_rsa.pub)>"
}