---
title: AWS Interview Questions and Answers
---

## Table of Contents

## Table of Contents

### Fundamentals
1. [What is AWS?](#1-what-is-aws)
2. [What are the main components of AWS?](#2-what-are-the-main-components-of-aws)
3. [What is a Region in AWS?](#3-what-is-a-region-in-aws)
4. [What is an Availability Zone?](#4-what-is-an-availability-zone)
5. [What is an Edge Location?](#5-what-is-an-edge-location)

### EC2 (Elastic Compute Cloud)
6. [What is EC2?](#6-what-is-ec2)
7. [What are the different EC2 instance types?](#7-what-are-the-different-ec2-instance-types)
8. [What is an AMI?](#8-what-is-an-ami)
9. [What is the difference between stopping and terminating an EC2 instance?](#9-what-is-the-difference-between-stopping-and-terminating-an-ec2-instance)
10. [What is Auto Scaling?](#10-what-is-auto-scaling)
11. [What are Security Groups?](#11-what-are-security-groups)

### S3 (Simple Storage Service)
12. [What is S3?](#12-what-is-s3)
13. [What are S3 storage classes?](#13-what-are-s3-storage-classes)
14. [What is S3 versioning?](#14-what-is-s3-versioning)
15. [What is S3 lifecycle policy?](#15-what-is-s3-lifecycle-policy)
16. [What is S3 replication?](#16-what-is-s3-replication)

### VPC (Virtual Private Cloud)
17. [What is a VPC?](#17-what-is-a-vpc)
18. [What is a subnet?](#18-what-is-a-subnet)
19. [What is an Internet Gateway?](#19-what-is-an-internet-gateway)
20. [What is a NAT Gateway?](#20-what-is-a-nat-gateway)
21. [What is the difference between Security Groups and NACLs?](#21-what-is-the-difference-between-security-groups-and-nacls)
22. [What is VPC Peering?](#22-what-is-vpc-peering)

### IAM (Identity and Access Management)
23. [What is IAM?](#23-what-is-iam)
24. [What are IAM Policies?](#24-what-are-iam-policies)
25. [What is an IAM Role?](#25-what-is-an-iam-role)
26. [What is the principle of least privilege?](#26-what-is-the-principle-of-least-privilege)
27. [What is MFA in AWS?](#27-what-is-mfa-in-aws)

### RDS (Relational Database Service)
28. [What is RDS?](#28-what-is-rds)
29. [What is RDS Multi-AZ?](#29-what-is-rds-multi-az)
30. [What is a Read Replica?](#30-what-is-a-read-replica)
31. [What is Amazon Aurora?](#31-what-is-amazon-aurora)

### Lambda
32. [What is AWS Lambda?](#32-what-is-aws-lambda)
33. [What are Lambda triggers?](#33-what-are-lambda-triggers)
34. [What is the maximum execution time for Lambda?](#34-what-is-the-maximum-execution-time-for-lambda)
35. [What is cold start in Lambda?](#35-what-is-cold-start-in-lambda)

### DynamoDB
36. [What is DynamoDB?](#36-what-is-dynamodb)
37. [What is the difference between a partition key and a sort key?](#37-what-is-the-difference-between-a-partition-key-and-a-sort-key)
38. [What is DynamoDB Global Secondary Index (GSI)?](#38-what-is-dynamodb-global-secondary-index-gsi)
39. [What is DynamoDB Local Secondary Index (LSI)?](#39-what-is-dynamodb-local-secondary-index-lsi)

### ELB (Elastic Load Balancing)
40. [What are the types of load balancers in AWS?](#40-what-are-the-types-of-load-balancers-in-aws)
41. [What is sticky session?](#41-what-is-sticky-session)

### CloudWatch
42. [What is CloudWatch?](#42-what-is-cloudwatch)
43. [What are CloudWatch Metrics?](#43-what-are-cloudwatch-metrics)
44. [What is CloudWatch Logs?](#44-what-is-cloudwatch-logs)
45. [What are CloudWatch Alarms?](#45-what-are-cloudwatch-alarms)

### Route 53
46. [What is Route 53?](#46-what-is-route-53)
47. [What are the different routing policies in Route 53?](#47-what-are-the-different-routing-policies-in-route-53)

### CloudFront
48. [What is CloudFront?](#48-what-is-cloudfront)
49. [What is an Origin in CloudFront?](#49-what-is-an-origin-in-cloudfront)
50. [What is TTL in CloudFront?](#50-what-is-ttl-in-cloudfront)

### SNS & SQS
51. [What is SNS?](#51-what-is-sns)
52. [What is SQS?](#52-what-is-sqs)
53. [What is the difference between SNS and SQS?](#53-what-is-the-difference-between-sns-and-sqs)
54. [What are the types of SQS queues?](#54-what-are-the-types-of-sqs-queues)

### Additional Services
55. [What is EBS?](#55-what-is-ebs)
56. [What is EFS?](#56-what-is-efs)
57. [What is CloudTrail?](#57-what-is-cloudtrail)
58. [What is AWS Config?](#58-what-is-aws-config)
59. [What is Elastic Beanstalk?](#59-what-is-elastic-beanstalk)
60. [What is CloudFormation?](#60-what-is-cloudformation)
61. [What is the difference between CloudFormation and Terraform?](#61-what-is-the-difference-between-cloudformation-and-terraform)
62. [What is the AWS Shared Responsibility Model?](#62-what-is-the-aws-shared-responsibility-model)

### Best Practices
63. [What are AWS Well-Architected Framework pillars?](#63-what-are-aws-well-architected-framework-pillars)
64. [How do you secure S3 buckets?](#64-how-do-you-secure-s3-buckets)
65. [How do you optimize AWS costs?](#65-how-do-you-optimize-aws-costs)

### ECS & EKS (Container Services)
66. [What is ECS?](#66-what-is-ecs)
67. [What is the difference between ECS and EKS?](#67-what-is-the-difference-between-ecs-and-eks)
68. [What is Fargate?](#68-what-is-fargate)
69. [What is ECR?](#69-what-is-ecr)

### API Gateway
70. [What is API Gateway?](#70-what-is-api-gateway)
71. [What are the types of APIs in API Gateway?](#71-what-are-the-types-of-apis-in-api-gateway)
72. [What is API Gateway throttling?](#72-what-is-api-gateway-throttling)

### Step Functions & EventBridge
73. [What is AWS Step Functions?](#73-what-is-aws-step-functions)
74. [What is Amazon EventBridge?](#74-what-is-amazon-eventbridge)

### Storage Gateway & DataSync
75. [What is AWS Storage Gateway?](#75-what-is-aws-storage-gateway)
76. [What is AWS DataSync?](#76-what-is-aws-datasync)

### Kinesis
77. [What is Amazon Kinesis?](#77-what-is-amazon-kinesis)
78. [What are the types of Kinesis services?](#78-what-are-the-types-of-kinesis-services)

### Redshift & Athena
79. [What is Amazon Redshift?](#79-what-is-amazon-redshift)
80. [What is Amazon Athena?](#80-what-is-amazon-athena)
81. [What is the difference between Redshift and Athena?](#81-what-is-the-difference-between-redshift-and-athena)

### ElastiCache
82. [What is Amazon ElastiCache?](#82-what-is-amazon-elasticache)
83. [What is the difference between Redis and Memcached in ElastiCache?](#83-what-is-the-difference-between-redis-and-memcached-in-elasticache)

### AWS Organizations & Control Tower
84. [What is AWS Organizations?](#84-what-is-aws-organizations)
85. [What are Service Control Policies (SCPs)?](#85-what-are-service-control-policies-scps)
86. [What is AWS Control Tower?](#86-what-is-aws-control-tower)

### AWS Backup & Disaster Recovery
87. [What is AWS Backup?](#87-what-is-aws-backup)
88. [What are the different disaster recovery strategies?](#88-what-are-the-different-disaster-recovery-strategies)
89. [What is the difference between RPO and RTO?](#89-what-is-the-difference-between-rpo-and-rto)

### KMS & Secrets Manager
90. [What is AWS KMS?](#90-what-is-aws-kms)
91. [What is AWS Secrets Manager?](#91-what-is-aws-secrets-manager)
92. [What is the difference between KMS and Secrets Manager?](#92-what-is-the-difference-between-kms-and-secrets-manager)

### AWS WAF & Shield
93. [What is AWS WAF?](#93-what-is-aws-waf)
94. [What is AWS Shield?](#94-what-is-aws-shield)
95. [What is the difference between Shield Standard and Shield Advanced?](#95-what-is-the-difference-between-shield-standard-and-shield-advanced)

### Systems Manager
96. [What is AWS Systems Manager?](#96-what-is-aws-systems-manager)
97. [What is Systems Manager Parameter Store?](#97-what-is-systems-manager-parameter-store)

### Migration Services
98. [What is AWS Database Migration Service (DMS)?](#98-what-is-aws-database-migration-service-dms)
99. [What is AWS Server Migration Service (SMS)?](#99-what-is-aws-server-migration-service-sms)
100. [What is AWS Snow Family?](#100-what-is-aws-snow-family)

### Developer Tools
101. [What is AWS CodePipeline?](#101-what-is-aws-codepipeline)
102. [What is AWS CodeBuild?](#102-what-is-aws-codebuild)
103. [What is AWS CodeDeploy?](#103-what-is-aws-codedeploy)
104. [What is AWS CodeCommit?](#104-what-is-aws-codecommit)

### Machine Learning Services
105. [What is Amazon SageMaker?](#105-what-is-amazon-sagemaker)
106. [What is Amazon Rekognition?](#106-what-is-amazon-rekognition)
107. [What is Amazon Comprehend?](#107-what-is-amazon-comprehend)

### Advanced Concepts
108. [What is AWS Direct Connect?](#108-what-is-aws-direct-connect)
109. [What is AWS Transit Gateway?](#109-what-is-aws-transit-gateway)
110. [What is AWS PrivateLink?](#110-what-is-aws-privatelink)
111. [What are placement groups in EC2?](#111-what-are-placement-groups-in-ec2)
112. [What is EC2 Instance Connect?](#112-what-is-ec2-instance-connect)
113. [What is Amazon WorkSpaces?](#113-what-is-amazon-workspaces)
114. [What is AWS Glue?](#114-what-is-aws-glue)
115. [What is Amazon EMR?](#115-what-is-amazon-emr)
116. [What is AWS Outposts?](#116-what-is-aws-outposts)
117. [What is AWS Local Zones?](#117-what-is-aws-local-zones)
118. [What is AWS Wavelength?](#118-what-is-aws-wavelength)
119. [What is the difference between horizontal and vertical scaling?](#119-what-is-the-difference-between-horizontal-and-vertical-scaling)
120. [What is AWS Certificate Manager (ACM)?](#120-what-is-aws-certificate-manager-acm)

---

## Fundamentals

### 1. What is AWS?

Amazon Web Services (AWS) is a comprehensive cloud computing platform provided by Amazon that offers over 200 services including computing power, storage, databases, networking, analytics, machine learning, and more. It operates on a pay-as-you-go pricing model and provides infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS).

### 2. What are the main components of AWS?

- **Compute**: EC2, Lambda, ECS, EKS
- **Storage**: S3, EBS, EFS, Glacier
- **Database**: RDS, DynamoDB, Aurora, Redshift
- **Networking**: VPC, Route 53, CloudFront, API Gateway
- **Security**: IAM, KMS, WAF, Shield
- **Management**: CloudWatch, CloudTrail, Config

### 3. What is a Region in AWS?

A Region is a physical geographical location where AWS clusters data centers. Each Region consists of multiple isolated locations called Availability Zones. Examples include us-east-1 (N. Virginia), eu-west-1 (Ireland), and ap-southeast-1 (Singapore).

### 4. What is an Availability Zone?

An Availability Zone (AZ) is one or more discrete data centers within an AWS Region, each with redundant power, networking, and connectivity. AZs are physically separated to provide fault tolerance and low-latency network connectivity.

### 5. What is an Edge Location?

Edge Locations are AWS data centers designed to deliver content to end users with low latency. They are used primarily by CloudFront (CDN) and Route 53. There are many more Edge Locations than Regions.

## EC2 (Elastic Compute Cloud)

### 6. What is EC2?

EC2 is a web service that provides resizable compute capacity in the cloud. It allows you to launch virtual servers (instances) on-demand, with various instance types optimized for different use cases.

### 7. What are the different EC2 instance types?

- **General Purpose**: T3, T4g, M5, M6i (balanced compute, memory, networking)
- **Compute Optimized**: C5, C6i (high-performance processors)
- **Memory Optimized**: R5, R6i, X2 (large datasets in memory)
- **Storage Optimized**: I3, D2, H1 (high sequential read/write)
- **Accelerated Computing**: P4, G5, Inf1 (GPU/machine learning)

### 8. What is an AMI?

An Amazon Machine Image (AMI) is a pre-configured template that contains the software configuration (OS, application server, applications) required to launch an EC2 instance. AMIs can be public, private, or purchased from the AWS Marketplace.

### 9. What is the difference between stopping and terminating an EC2 instance?

- **Stopping**: The instance is shut down but can be restarted later. EBS volumes remain attached, and you're charged for EBS storage but not compute time.
- **Terminating**: The instance is permanently deleted. By default, EBS root volumes are deleted unless configured otherwise.

### 10. What is Auto Scaling?

Auto Scaling automatically adjusts the number of EC2 instances based on demand. It uses scaling policies based on CloudWatch metrics (CPU, network, custom metrics) to maintain application availability and optimize costs.

### 11. What are Security Groups?

Security Groups act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic at the instance level. They are stateful (return traffic is automatically allowed) and support allow rules only.

## S3 (Simple Storage Service)

### 12. What is S3?

S3 is object storage built to store and retrieve any amount of data from anywhere. It offers 99.999999999% (11 nines) durability and 99.99% availability. Data is stored as objects within buckets.

### 13. What are S3 storage classes?

- **Standard**: Frequently accessed data, high availability
- **Intelligent-Tiering**: Automatic cost optimization for changing access patterns
- **Standard-IA**: Infrequently accessed data, lower storage cost
- **One Zone-IA**: Infrequently accessed, stored in single AZ
- **Glacier Instant Retrieval**: Archive with millisecond retrieval
- **Glacier Flexible Retrieval**: Archive with retrieval in minutes to hours
- **Glacier Deep Archive**: Lowest cost for long-term archive

### 14. What is S3 versioning?

Versioning keeps multiple variants of an object in the same bucket. It protects against accidental deletion and overwrites. Once enabled, it cannot be disabled, only suspended.

### 15. What is S3 lifecycle policy?

Lifecycle policies automatically transition objects between storage classes or expire objects based on age. For example, move objects to Glacier after 30 days or delete after 365 days.

### 16. What is S3 replication?

S3 replication automatically copies objects across buckets:

- **Cross-Region Replication (CRR)**: Replicate to different regions for compliance/latency
- **Same-Region Replication (SRR)**: Replicate within same region for backup/compliance

## VPC (Virtual Private Cloud)

### 17. What is a VPC?

A VPC is a logically isolated virtual network where you can launch AWS resources. You control IP address ranges, subnets, route tables, and network gateways.

### 18. What is a subnet?

A subnet is a range of IP addresses within a VPC. Subnets can be:

- **Public**: Has a route to an Internet Gateway
- **Private**: No direct route to the internet

### 19. What is an Internet Gateway?

An Internet Gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the internet.

### 20. What is a NAT Gateway?

A NAT (Network Address Translation) Gateway enables instances in a private subnet to connect to the internet or other AWS services while preventing the internet from initiating connections to those instances.

### 21. What is the difference between Security Groups and NACLs?

- **Security Groups**: Stateful, instance-level, support allow rules only, evaluate all rules
- **NACLs (Network ACLs)**: Stateless, subnet-level, support allow and deny rules, process rules in order

### 22. What is VPC Peering?

VPC Peering connects two VPCs to route traffic between them using private IP addresses. VPCs can be in different regions or accounts. Peering is not transitive.

## IAM (Identity and Access Management)

### 23. What is IAM?

IAM enables you to manage access to AWS services and resources securely. You can create and manage AWS users, groups, roles, and their permissions.

### 24. What are IAM Policies?

IAM Policies are JSON documents that define permissions. They specify what actions are allowed or denied on which resources. Policies can be attached to users, groups, or roles.

### 25. What is an IAM Role?

An IAM Role is an identity with specific permissions that can be assumed by users, applications, or services. Unlike users, roles don't have permanent credentials. Common use: allowing EC2 instances to access S3.

### 26. What is the principle of least privilege?

The principle of least privilege means granting only the minimum permissions necessary to perform a task. This security best practice reduces the potential impact of compromised credentials.

### 27. What is MFA in AWS?

Multi-Factor Authentication (MFA) adds an extra layer of security by requiring users to provide two or more verification factors: something they know (password) and something they have (MFA device/token).

## RDS (Relational Database Service)

### 28. What is RDS?

RDS is a managed relational database service that supports multiple database engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora. AWS handles backups, patching, and failover.

### 29. What is RDS Multi-AZ?

Multi-AZ deployment creates a synchronous standby replica in a different AZ. If the primary fails, RDS automatically fails over to the standby. This provides high availability but not read scaling.

### 30. What is a Read Replica?

Read Replicas are asynchronous copies of the database that can serve read traffic. They improve read performance and can be promoted to standalone databases. Available in same region or cross-region.

### 31. What is Amazon Aurora?

Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud. It offers 5x performance of MySQL and 3x of PostgreSQL, with automated backups, snapshots, and replication across 3 AZs.

## Lambda

### 32. What is AWS Lambda?

Lambda is a serverless compute service that runs code in response to events without provisioning servers. You pay only for compute time consumed. It automatically scales and manages infrastructure.

### 33. What are Lambda triggers?

Lambda functions can be triggered by various AWS services:

- S3 events (object upload)
- DynamoDB streams
- API Gateway requests
- CloudWatch Events
- SNS/SQS messages
- Kinesis streams

### 34. What is the maximum execution time for Lambda?

The maximum execution timeout for a Lambda function is 15 minutes (900 seconds). For longer-running processes, consider ECS, EC2, or Step Functions.

### 35. What is cold start in Lambda?

A cold start occurs when Lambda initializes a new execution environment for a function. This adds latency to the first invocation. Subsequent invocations reuse the environment (warm start) and execute faster.

## DynamoDB

### 36. What is DynamoDB?

DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. It supports key-value and document data models.

### 37. What is the difference between a partition key and a sort key?

- **Partition Key**: The primary key attribute that determines where data is stored. Must be unique if used alone.
- **Sort Key**: Optional second part of composite primary key. Items with same partition key are stored together and sorted by sort key.

### 38. What is DynamoDB Global Secondary Index (GSI)?

A GSI is an index with a partition key and optional sort key that can be different from the table. It allows queries on non-primary key attributes and can be created anytime.

### 39. What is DynamoDB Local Secondary Index (LSI)?

An LSI uses the same partition key as the table but a different sort key. It must be created when the table is created and shares throughput with the table.

## ELB (Elastic Load Balancing)

### 40. What are the types of load balancers in AWS?

- **Application Load Balancer (ALB)**: Layer 7 (HTTP/HTTPS), content-based routing, WebSocket support
- **Network Load Balancer (NLB)**: Layer 4 (TCP/UDP), extreme performance, static IP
- **Gateway Load Balancer**: Layer 3, deploy and scale third-party appliances
- **Classic Load Balancer**: Legacy, both Layer 4 and 7 (deprecated for new applications)

### 41. What is sticky session?

Sticky sessions (session affinity) bind a user's session to a specific instance, ensuring all requests from that user go to the same instance. Useful for applications that store session data locally.

## CloudWatch

### 42. What is CloudWatch?

CloudWatch is a monitoring and observability service that collects metrics, logs, and events from AWS resources and applications. It provides dashboards, alarms, and automated actions.

### 43. What are CloudWatch Metrics?

Metrics are time-ordered data points representing the behavior of resources (CPU utilization, network traffic). AWS services publish default metrics, and you can publish custom metrics.

### 44. What is CloudWatch Logs?

CloudWatch Logs enables you to monitor, store, and access log files from EC2 instances, Lambda functions, CloudTrail, and other sources. You can search, filter, and create metric filters.

### 45. What are CloudWatch Alarms?

Alarms watch a single metric and execute actions based on threshold breaches. Actions can include SNS notifications, Auto Scaling policies, or EC2 actions (stop, terminate, reboot).

## Route 53

### 46. What is Route 53?

Route 53 is a highly available and scalable DNS (Domain Name System) web service. It routes end users to internet applications by translating domain names to IP addresses.

### 47. What are the different routing policies in Route 53?

- **Simple**: Route to a single resource
- **Weighted**: Distribute traffic across multiple resources by assigned weights
- **Latency**: Route based on lowest network latency
- **Failover**: Active-passive failover configuration
- **Geolocation**: Route based on user's geographic location
- **Geoproximity**: Route based on geographic location with bias
- **Multi-value**: Return multiple healthy IP addresses

## CloudFront

### 48. What is CloudFront?

CloudFront is a Content Delivery Network (CDN) that delivers content to users with low latency by caching content at edge locations worldwide. It integrates with S3, EC2, ELB, and custom origins.

### 49. What is an Origin in CloudFront?

An Origin is the source of the original content that CloudFront distributes. It can be an S3 bucket, EC2 instance, ELB, or any custom HTTP server.

### 50. What is TTL in CloudFront?

Time To Live (TTL) determines how long CloudFront caches an object before requesting it again from the origin. Default is 24 hours, but can be customized per object.

## SNS & SQS

### 51. What is SNS?

Simple Notification Service (SNS) is a pub/sub messaging service that enables you to decouple microservices and send messages to multiple subscribers (email, SMS, Lambda, SQS, HTTP endpoints).

### 52. What is SQS?

Simple Queue Service (SQS) is a fully managed message queuing service for decoupling application components. Messages are stored until processed and deleted.

### 53. What is the difference between SNS and SQS?

- **SNS**: Push-based, pub/sub model, one-to-many, immediate delivery
- **SQS**: Pull-based, queue model, one-to-one, messages persist until consumed

### 54. What are the types of SQS queues?

- **Standard Queue**: Unlimited throughput, at-least-once delivery, best-effort ordering
- **FIFO Queue**: Exactly-once processing, strict ordering, up to 3000 messages/second

## Additional Services

### 55. What is EBS?

Elastic Block Store provides persistent block storage volumes for EC2 instances. Volumes are automatically replicated within an AZ. Types include gp3 (general purpose SSD), io2 (provisioned IOPS), st1 (throughput optimized HDD).

### 56. What is EFS?

Elastic File System is a fully managed, scalable file storage service for use with EC2. Multiple instances can access EFS simultaneously. It automatically grows and shrinks as you add/remove files.

### 57. What is CloudTrail?

CloudTrail records AWS API calls and related events for your account. It provides audit trails for compliance, security analysis, and resource change tracking.

### 58. What is AWS Config?

AWS Config continuously monitors and records AWS resource configurations. It assesses compliance with desired configurations and tracks configuration changes over time.

### 59. What is Elastic Beanstalk?

Elastic Beanstalk is a PaaS that automatically handles deployment, capacity provisioning, load balancing, auto-scaling, and monitoring. You upload your code, and Beanstalk handles the infrastructure.

### 60. What is CloudFormation?

CloudFormation is an Infrastructure as Code (IaC) service that allows you to model and provision AWS resources using JSON or YAML templates. It enables version control and repeatable deployments.

### 61. What is the difference between CloudFormation and Terraform?

- **CloudFormation**: AWS-native, free, supports all AWS services immediately, JSON/YAML
- **Terraform**: Multi-cloud, third-party, larger community, uses HCL language

### 62. What is the AWS Shared Responsibility Model?

AWS is responsible for security "of" the cloud (hardware, infrastructure, regions, AZs). Customers are responsible for security "in" the cloud (data, IAM, OS patching, encryption, network configuration).

## Best Practices

### 63. What are AWS Well-Architected Framework pillars?

1. **Operational Excellence**: Run and monitor systems
2. **Security**: Protect information and systems
3. **Reliability**: Recover from failures, meet demand
4. **Performance Efficiency**: Use resources efficiently
5. **Cost Optimization**: Avoid unnecessary costs
6. **Sustainability**: Minimize environmental impact

### 64. How do you secure S3 buckets?

- Block public access by default
- Enable versioning and MFA delete
- Use bucket policies and IAM policies
- Enable server-side encryption
- Use VPC endpoints for private access
- Enable logging and CloudTrail
- Implement lifecycle policies

### 65. How do you optimize AWS costs?

- Use Reserved Instances and Savings Plans
- Right-size instances based on monitoring
- Delete unused resources (EBS volumes, snapshots, elastic IPs)
- Use Auto Scaling
- Leverage S3 Intelligent-Tiering
- Use spot instances for fault-tolerant workloads
- Enable Cost Explorer and set budgets

## ECS & EKS (Container Services)

### 66. What is ECS?

Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that allows you to run Docker containers at scale. It eliminates the need to install and operate your own container orchestration software.

### 67. What is the difference between ECS and EKS?

- **ECS**: AWS-native container orchestration, simpler to set up, integrated with AWS services, no Kubernetes knowledge needed
- **EKS**: Managed Kubernetes service, portable across clouds, uses Kubernetes API, more complex but industry-standard

### 68. What is Fargate?

AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS. It eliminates the need to provision and manage servers, allowing you to focus on building applications. You specify CPU and memory requirements, and Fargate handles the infrastructure.

### 69. What is ECR?

Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, manage, and deploy Docker container images. It integrates with ECS and EKS and supports both public and private repositories.

## API Gateway

### 70. What is API Gateway?

API Gateway is a fully managed service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale. It handles traffic management, authorization, access control, monitoring, and API version management.

### 71. What are the types of APIs in API Gateway?

- **REST API**: Full-featured API with resource-based model, supports API keys, per-client throttling
- **HTTP API**: Lower cost, lower latency, simpler APIs, fewer features than REST
- **WebSocket API**: Enables two-way communication between clients and servers for real-time applications

### 72. What is API Gateway throttling?

Throttling limits the number of requests per second that API Gateway accepts. Default limits are 10,000 requests per second with burst of 5,000 requests. Throttling prevents APIs from being overwhelmed and protects backend services.

## Step Functions & EventBridge

### 73. What is AWS Step Functions?

Step Functions is a serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows using visual state machines. It's useful for building complex, multi-step applications with built-in error handling and retry logic.

### 74. What is Amazon EventBridge?

EventBridge is a serverless event bus service that connects applications using events from AWS services, SaaS applications, and custom applications. It enables event-driven architectures by routing events to targets like Lambda, SNS, and SQS.

## Storage Gateway & DataSync

### 75. What is AWS Storage Gateway?

Storage Gateway is a hybrid cloud storage service that connects on-premises applications to AWS cloud storage. It provides three types: File Gateway (NFS/SMB), Volume Gateway (iSCSI), and Tape Gateway (virtual tape library).

### 76. What is AWS DataSync?

DataSync is an online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage and AWS storage services (S3, EFS, FSx). It's up to 10x faster than open-source tools.

## Kinesis

### 77. What is Amazon Kinesis?

Kinesis is a platform for streaming data on AWS, making it easy to collect, process, and analyze real-time streaming data. It can handle data from hundreds of thousands of sources with very low latencies.

### 78. What are the types of Kinesis services?

- **Kinesis Data Streams**: Real-time data streaming with custom processing
- **Kinesis Data Firehose**: Load streaming data into data stores (S3, Redshift, Elasticsearch)
- **Kinesis Data Analytics**: Analyze streaming data using SQL or Apache Flink
- **Kinesis Video Streams**: Stream video from devices to AWS for analytics and ML

## Redshift & Athena

### 79. What is Amazon Redshift?

Redshift is a fast, fully managed, petabyte-scale data warehouse service. It uses columnar storage and parallel query execution to analyze large datasets using SQL. It's designed for OLAP (Online Analytical Processing) workloads.

### 80. What is Amazon Athena?

Athena is a serverless, interactive query service that analyzes data in S3 using standard SQL. You pay only for queries run, with no infrastructure to manage. It's built on Presto and supports various data formats (CSV, JSON, Parquet, ORC).

### 81. What is the difference between Redshift and Athena?

- **Redshift**: Data warehouse, requires provisioning clusters, faster for complex queries, best for frequent analysis, supports INSERT/UPDATE
- **Athena**: Serverless, queries data in S3, pay per query, best for ad-hoc analysis, read-only queries

## ElastiCache

### 82. What is Amazon ElastiCache?

ElastiCache is a fully managed in-memory data store and cache service supporting Redis and Memcached. It improves application performance by retrieving data from fast, managed, in-memory caches instead of slower disk-based databases.

### 83. What is the difference between Redis and Memcached in ElastiCache?

- **Redis**: Advanced data structures, persistence, replication, multi-AZ, pub/sub, backup/restore, sorted sets
- **Memcached**: Simple caching, multi-threaded, horizontal scaling, no persistence, simpler data types

## AWS Organizations & Control Tower

### 84. What is AWS Organizations?

AWS Organizations helps you centrally manage and govern multiple AWS accounts. It provides consolidated billing, account creation automation, policy-based access controls, and service control policies across accounts.

### 85. What are Service Control Policies (SCPs)?

SCPs are policies that specify maximum permissions for accounts in an organization. They don't grant permissions but limit what actions can be performed, even if IAM policies allow them. SCPs are applied at OU or account level.

### 86. What is AWS Control Tower?

Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment based on best practices. It automates account setup, implements guardrails (SCPs and Config rules), and provides a dashboard for governance.

## AWS Backup & Disaster Recovery

### 87. What is AWS Backup?

AWS Backup is a fully managed backup service that centralizes and automates data backup across AWS services (EC2, EBS, RDS, DynamoDB, EFS, etc.). It provides backup scheduling, retention management, and compliance reporting.

### 88. What are the different disaster recovery strategies?

- **Backup and Restore**: Lowest cost, highest RTO/RPO, restore from backups
- **Pilot Light**: Minimal critical core running, scale up during disaster
- **Warm Standby**: Scaled-down version fully functional, scale up during disaster
- **Multi-Site (Hot Standby)**: Full production scale running in another region, lowest RTO/RPO, highest cost

### 89. What is the difference between RPO and RTO?

- **RPO (Recovery Point Objective)**: Maximum acceptable data loss measured in time (e.g., last 1 hour of data)
- **RTO (Recovery Time Objective)**: Maximum acceptable downtime (e.g., restore service within 4 hours)

## KMS & Secrets Manager

### 90. What is AWS KMS?

AWS Key Management Service (KMS) is a managed service for creating and controlling encryption keys used to encrypt data. It integrates with most AWS services and uses Hardware Security Modules (HSMs) to protect keys.

### 91. What is AWS Secrets Manager?

Secrets Manager helps you manage, retrieve, and rotate database credentials, API keys, and other secrets throughout their lifecycle. It automatically rotates secrets and integrates with RDS, Redshift, and DocumentDB.

### 92. What is the difference between KMS and Secrets Manager?

- **KMS**: Manages encryption keys, encrypts/decrypts data, doesn't store application secrets
- **Secrets Manager**: Stores and rotates secrets (passwords, API keys), encrypted using KMS, includes automatic rotation

## AWS WAF & Shield

### 93. What is AWS WAF?

AWS Web Application Firewall (WAF) protects web applications from common web exploits like SQL injection and cross-site scripting (XSS). It allows you to create rules that block, allow, or monitor web requests based on conditions.

### 94. What is AWS Shield?

AWS Shield is a managed DDoS (Distributed Denial of Service) protection service. It protects applications running on AWS against DDoS attacks with always-on detection and automatic inline mitigations.

### 95. What is the difference between Shield Standard and Shield Advanced?

- **Shield Standard**: Free, automatic protection for all AWS customers, protects against common layer 3/4 attacks
- **Shield Advanced**: Paid service ($3000/month), enhanced protection, DDoS cost protection, 24/7 DDoS response team, protects EC2, ELB, CloudFront, Route 53, Global Accelerator

## Systems Manager

### 96. What is AWS Systems Manager?

Systems Manager provides a unified interface to view operational data and automate tasks across AWS resources. It includes capabilities for patch management, running commands, session manager, parameter store, and automation.

### 97. What is Systems Manager Parameter Store?

Parameter Store provides secure, hierarchical storage for configuration data and secrets management. It's free for standard parameters (up to 10,000) and integrates with KMS for encryption. Less feature-rich than Secrets Manager but cost-effective.

## Migration Services

### 98. What is AWS Database Migration Service (DMS)?

DMS helps migrate databases to AWS quickly and securely. The source database remains operational during migration, minimizing downtime. It supports homogeneous migrations (Oracle to Oracle) and heterogeneous migrations (Oracle to Aurora).

### 99. What is AWS Server Migration Service (SMS)?

SMS (now superseded by Application Migration Service) is an agentless service for migrating on-premises workloads to AWS. It automates, schedules, and tracks incremental replications of live server volumes.

### 100. What is AWS Snow Family?

Snow Family consists of physical devices for data migration and edge computing:

- **Snowcone**: 8TB, portable, IoT/edge computing (smallest)
- **Snowball Edge**: 80TB-210TB, compute capabilities, can run EC2/Lambda
- **Snowmobile**: 100PB, truck-sized container for exabyte-scale transfers

## Developer Tools

### 101. What is AWS CodePipeline?

CodePipeline is a fully managed continuous delivery service that automates release pipelines for fast and reliable application updates. It orchestrates build, test, and deploy phases based on your release model.

### 102. What is AWS CodeBuild?

CodeBuild is a fully managed build service that compiles source code, runs tests, and produces deployable software packages. It scales continuously and processes multiple builds concurrently, eliminating queue wait times.

### 103. What is AWS CodeDeploy?

CodeDeploy automates application deployments to EC2, Fargate, Lambda, or on-premises servers. It handles deployment strategies like blue/green and rolling deployments, with built-in rollback capabilities.

### 104. What is AWS CodeCommit?

CodeCommit is a fully managed source control service that hosts secure Git repositories. It eliminates the need to manage your own source control system and scales seamlessly.

## Machine Learning Services

### 105. What is Amazon SageMaker?

SageMaker is a fully managed service for building, training, and deploying machine learning models. It provides Jupyter notebooks, built-in algorithms, automatic model tuning, and one-click deployment.

### 106. What is Amazon Rekognition?

Rekognition is a deep learning-based image and video analysis service. It can identify objects, people, text, scenes, activities, and detect inappropriate content. It also provides facial analysis and face comparison.

### 107. What is Amazon Comprehend?

Comprehend is a natural language processing (NLP) service that uses machine learning to find insights and relationships in text. It can extract key phrases, entities, sentiment, language, and topics from documents.

## Advanced Concepts

### 108. What is AWS Direct Connect?

Direct Connect establishes a dedicated network connection from your premises to AWS. It provides more consistent network performance than internet-based connections, reduces bandwidth costs, and supports private connectivity to VPCs.

### 109. What is AWS Transit Gateway?

Transit Gateway acts as a network transit hub to connect VPCs and on-premises networks through a central gateway. It simplifies network architecture and reduces the number of connections needed (eliminates complex peering relationships).

### 110. What is AWS PrivateLink?

PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications without exposing traffic to the internet. Traffic doesn't traverse the public internet, improving security and performance.

### 111. What are placement groups in EC2?

Placement groups influence instance placement to meet specific needs:

- **Cluster**: Packs instances close together in single AZ for low latency (HPC applications)
- **Partition**: Spreads instances across logical partitions, reducing correlated failures (Hadoop, Cassandra)
- **Spread**: Places instances on distinct hardware, maximum 7 instances per AZ (critical applications)

### 112. What is EC2 Instance Connect?

Instance Connect provides a simple and secure way to connect to EC2 instances using SSH without managing SSH keys. It uses IAM policies for access control and pushes one-time-use SSH public keys to instances.

### 113. What is Amazon WorkSpaces?

WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution. It provisions cloud-based virtual desktops that allow users to access documents, applications, and resources from any supported device.

### 114. What is AWS Glue?

Glue is a fully managed ETL (Extract, Transform, Load) service. It automatically discovers and catalogs data, generates ETL code, and runs jobs on a serverless Spark environment. It includes a Data Catalog for metadata management.

### 115. What is Amazon EMR?

Elastic MapReduce (EMR) is a managed Hadoop framework for processing vast amounts of data. It supports Apache Spark, HBase, Presto, Flink, and other big data frameworks. It automatically provisions capacity and tunes clusters.

### 116. What is AWS Outposts?

Outposts brings native AWS services, infrastructure, and operating models to on-premises facilities. It provides a consistent hybrid experience with fully managed AWS infrastructure deployed at customer locations.

### 117. What is AWS Local Zones?

Local Zones place AWS compute, storage, database, and other services closer to end-users for latency-sensitive applications. They're extensions of AWS Regions located in major population centers.

### 118. What is AWS Wavelength?

Wavelength embeds AWS compute and storage services within telecommunications providers' 5G networks. It minimizes latency for mobile and connected devices by deploying applications at the edge of 5G networks.

### 119. What is the difference between horizontal and vertical scaling?

- **Horizontal Scaling (Scale Out)**: Add more instances/servers, better fault tolerance, used by Auto Scaling
- **Vertical Scaling (Scale Up)**: Increase size/power of existing instance, has limits, requires downtime, simpler architecture

### 120. What is AWS Certificate Manager (ACM)?

ACM provisions, manages, and deploys SSL/TLS certificates for use with AWS services. It handles certificate renewals automatically and is free for public certificates used with AWS services like CloudFront, ELB, and API Gateway.