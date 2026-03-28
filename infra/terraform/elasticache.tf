# elasticache.tf - Terraform configuration

resource "aws_elasticache" "stacks_runner" {
  # Configuration for elasticache
  tags = {
    Project = "stacks-runner"
    Environment = "production"
  }
}
