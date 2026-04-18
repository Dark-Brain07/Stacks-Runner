# waf.tf - Terraform configuration

resource "aws_waf" "stacks_runner" {
  # Configuration for waf
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
