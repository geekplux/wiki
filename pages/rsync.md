- remote sync
- ```sh
  rsync -a -r dir1/ dir2
  rsync -a -e "ssh -i path_to_private_key" path_to_source_file username@ip:/path_to_target_file 
  ```