resource "aws_s3_bucket" "this" {
  bucket = "igorpiskizhevawsdevops"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

resource "aws_key_pair" "this" {
  public_key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC843SWrVL+WYYvdwYKWSd+VPsx3NUu+MY67Mj1sdHZ27Yuljf/HvXtW+n/AePxvFjVDLxTvvKX0k66KrhNTxQW0MmAtyTOvyRIFCVFif/fzQNarOapMSgnzkBGijnDIpHK6FbyJrRuhNdUJnXgNtkj3AJkXH94ttt4QbhWnlVScmd93Kdzg32EMSwevS+MK8Fug/pgsEPa5BbLmEU0gjukn3zTrYHPPRtThCu3NNCb8DXvF83RakWtmD1Adv1SK7gOxNYq/oqOoVXyfOYWizyHzkh7DXp876MZN9WxCv7gYdIyMQwXqvcoGVVKTDdVto6UTxJFPF98YyTK4m0QI65zj1DovE9fIfoAaFzpfpNXpVz7RmEkidBKm1z4pmpcbchsotn4+c4WwhIgyEnY8cNrpymHVT/gW7kNghrZuJCZUfcjvsFZY9LLbzjL5VE6Xy01qgzTTieneor7xITx+ouGbjRjk1cb6qvE4RN7wj1VX4OiR5vJeY6HRvPpt7CzhVc= igorpiskizhev@Ihar-Piskizhau.local"
}

resource "aws_s3_bucket_acl" "example" {
  bucket = aws_s3_bucket.this.id
  acl    = "private"
}

resource "aws_s3_object" "object" {
  bucket = aws_s3_bucket.this.bucket
  key    = "index.html"
  source = "../webiste/index.html"
  acl    = "public-read"
}
resource "aws_s3_object" "object2" {
  bucket = aws_s3_bucket.this.bucket
  key    = "css/styles.css"
  source = "../webiste/css/styles.css"
  acl    = "public-read"
}
resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.this.id
  policy = data.aws_iam_policy_document.allow_access_from_another_account.json
}

data "aws_iam_policy_document" "allow_access_from_another_account" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject",
      "s3:ListBucket"
    ]

    resources = [
      aws_s3_bucket.this.arn,
      "${aws_s3_bucket.this.arn}/*",
    ]

    condition {
      test     = "StringEquals"
      values   = [aws_cloudfront_distribution.s3_distribution.arn]
      variable = "AWS:SourceArn"
    }
  }
}
