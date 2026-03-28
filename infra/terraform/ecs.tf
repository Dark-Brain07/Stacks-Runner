# ecs.tf - Terraform configuration

resource "aws_ecs" "stacks_runner" {
  # Configuration for ecs
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
