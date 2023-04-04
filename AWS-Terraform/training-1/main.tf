data "aws_ami" "ubuntu" {
  most_recent = true
  # ubuntu ami account ID
  owners = ["099720109477"]
}


resource "aws_instance" "this" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  subnet_id = aws_subnet.this.id
  vpc_security_group_ids = [aws_security_group.this.id]
  key_name = aws_key_pair.this.key_name

}

resource "aws_key_pair" "this" {
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC843SWrVL+WYYvdwYKWSd+VPsx3NUu+MY67Mj1sdHZ27Yuljf/HvXtW+n/AePxvFjVDLxTvvKX0k66KrhNTxQW0MmAtyTOvyRIFCVFif/fzQNarOapMSgnzkBGijnDIpHK6FbyJrRuhNdUJnXgNtkj3AJkXH94ttt4QbhWnlVScmd93Kdzg32EMSwevS+MK8Fug/pgsEPa5BbLmEU0gjukn3zTrYHPPRtThCu3NNCb8DXvF83RakWtmD1Adv1SK7gOxNYq/oqOoVXyfOYWizyHzkh7DXp876MZN9WxCv7gYdIyMQwXqvcoGVVKTDdVto6UTxJFPF98YyTK4m0QI65zj1DovE9fIfoAaFzpfpNXpVz7RmEkidBKm1z4pmpcbchsotn4+c4WwhIgyEnY8cNrpymHVT/gW7kNghrZuJCZUfcjvsFZY9LLbzjL5VE6Xy01qgzTTieneor7xITx+ouGbjRjk1cb6qvE4RN7wj1VX4OiR5vJeY6HRvPpt7CzhVc= igorpiskizhev@Ihar-Piskizhau.local"
}