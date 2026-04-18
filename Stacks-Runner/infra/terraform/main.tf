# main.tf - Terraform configuration

resource "aws_main" "stacks_runner" {
  # Configuration for main
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
