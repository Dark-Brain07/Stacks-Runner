# variables.tf - Terraform configuration

resource "aws_variables" "stacks_runner" {
  # Configuration for variables
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
