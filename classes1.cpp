#include<bits/stdc++.h>
#define size 10
using namespace std;


class bankacc
{
  char name_dep[40];
  long int acc_num;
  char type[20];
  float balance;

public:
    int assign_invalue(void);
    void depo_amt(float dep_amt);
    void withdraw(float wd_amt);
    void display(void);


};
//definimg the functions
//1
int bankacc::assign_invalue(void)
{
  float initial;
  std::cout << "You have to pay rs 500 to open your account LOL XD" << '\n';
  std::cout << "-------------------------------------------------------" << '\n';
  std::cout << "If YES ,press 1" << '\n';
  std::cout << "If NO press 0" << '\n';
  int test;
  std::cin >> test;
  if(test==1)
  {
    initial=500.00;
    balance=initial;
    std::cout << endl << '\n';
    std::cout << "Enter name,account number and account type to craete account" << '\n';
    std::cin >> name_dep >> acc_num >> type;
  }
else
   ;//do nothing

   return test;
}
//2
void bankacc::depo_amt(float dep_amt)
{
   balance+=dep_amt;
}
//3
void bankacc::withdraw(float wd_amt)
{
  balance-=wd_amt;
  if(balance<500)
  std::cout << "Sorry! your balance is not suffcient, at leat min amt of Rs500 should be there" << '\n';
  balance+=wd_amt;
}
//4
void bankacc::display(void)
{
  std::cout << "---------------------------------------------------------------------------" << '\n';
  std::cout << setw(12) << "name" << setw(20) << "acc type" << setw(12) << "balance" << '\n';
  std::cout << "---------------------------------------------------------------------------" << '\n';
  std::cout << setw(12) << name_dep << setw(17) << acc_num << setw(14) << balance << '\n';
}

//main function starts..

int main()
{
  bankacc acc;
  int t;

    t=acc.assign_invalue();
    std::cout << endl << '\n';
    if(t==1)
    {
      std::cout << "Like to deposit:)" << '\n';
      std::cout << "If NO press 0" << '\n';
      std::cout << "If YES enter deposit amount:)" << '\n';
      float dp;
      std::cin >> dp;
      acc.depo_amt(dp);                              //dp=dep_amt
      std::cout << "want to withdraw?" << '\n';
      std::cout << "If NO press 0 :(" << '\n';
      std::cout << "If YES enter withdraw amount:)" << '\n';
      float wd;
      std::cin >> wd;                                   //wd=wd_amt
      acc.withdraw(wd);
      std::cout << endl << '\n';
      std::cout << "see details:" << '\n';
      acc.display();
      std::cout << endl << '\n';
    }
  else if(t==0)
  std::cout << "Thnank you  :p !!!" << '\n';

return 0;
}
