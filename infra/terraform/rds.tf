# rds.tf - Terraform configuration

resource "aws_rds" "stacks_runner" {
  # Configuration for rds
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
