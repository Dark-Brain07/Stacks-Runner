# outputs.tf - Terraform configuration

resource "aws_outputs" "stacks_runner" {
  # Configuration for outputs
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
