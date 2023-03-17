# Task 1
### Create an amazon infrastructure which will contain the followong resources

- EC2 instance with installed nginx server (better to use user data but you also can do it manualy)
- New VPC for instance (VPC should have 10.0.0.0/16)
- Subnet for vpc (10.0.5.0 with 256 ip addresses range)
- Instance should be available through the aws loadbalancer (classic or application(better to use application))
- SSH port should be open and should be available to log in
- instance should not be available directly from the internet
- loadbalancer should be available directly from the internet
- All configuration should be available through terraform


### For this task: 
- create a branch ```git checkout -b <your_name>_<your_surname>```
- in your new branch create a folder inside folder homework_1 called ```<your_name>_<your_surname>```
- put all terraform code inside this branch
- ! Do not put your aws credentials inside the code

### After the work will be done
- Push your code to github
- Create a pull request from your branch to main branch


### If you get stucked, open a spoilers, they will contain resources that you will need to create
<details>
<summary><b>EC2</b></summary>

- aws_instance
- aws_key_pair
</details>
<details>
<summary><b>Networking</b></summary>

- aws_vpc
- aws_subnet
- aws_route_table
- aws_route_table_association
- 2 aws_security_group resources: 1 for loadbalancer and 1 for instance
- aws_internet_gateway
</details>
<details>
<summary><b>Loadbalancing</b></summary>

- aws_lb
- aws_lb_target_group
- aws_lb_target_group_attachment
- aws_lb_listener
- aws_lb_listener_rule
</details>

# Good Luck



