# vpc.tf - Terraform configuration

resource "aws_vpc" "stacks_runner" {
  # Configuration for vpc
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
