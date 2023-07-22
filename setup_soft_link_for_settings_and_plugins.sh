current_dir="$(pwd)/.logseq"
target_dir="${HOME}/.logseq"

ln -s ${current_dir}/preferences.json ${target_dir}
ln -s ${current_dir}/config ${target_dir}
ln -s ${current_dir}/plugins ${target_dir}
ln -s ${current_dir}/settings ${target_dir}
