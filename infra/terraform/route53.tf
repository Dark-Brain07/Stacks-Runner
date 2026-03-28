# route53.tf - Terraform configuration

resource "aws_route53" "stacks_runner" {
  # Configuration for route53
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
