resource "aws_vpc" "this" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "task-1"
  }
}

resource "aws_subnet" "this" {
  cidr_block = "10.0.5.0/24"
  vpc_id     = aws_vpc.this.id
  tags = {
    Name = "task-1"
  }
}

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
  tags = {
    Name = "task-1"
  }
}

resource "aws_route_table" "this" {
  vpc_id = aws_vpc.this.id
  route {
    cidr_block = "10.0.0.0/16"
    gateway_id = aws_internet_gateway.this.id
  }
  tags = {
    Name = "task-1"
  }
}

resource "aws_route_table_association" "this" {
  vpc_id = aws_vpc.this.id
  route_table_id = aws_route_table.this.id
  subnet_id = aws_subnet.this.id
  tags = {
    Name = "task-1"
  }
}


resource "aws_security_group" "this" {
  vpc_id = aws_vpc.this.id

  ingress {
    from_port = 0
    protocol  = "-1"
    to_port   = 0
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 0
    protocol  = "-1"
    to_port   = 0
    security_groups = ["0.0.0.0/0"]
  }
}