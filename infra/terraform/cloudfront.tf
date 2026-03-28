# cloudfront.tf - Terraform configuration

resource "aws_cloudfront" "stacks_runner" {
  # Configuration for cloudfront
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
