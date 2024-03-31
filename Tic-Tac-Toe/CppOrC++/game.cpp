#include <iostream>
#include <cstring>
using namespace std;
int main()
{
    int space[3][3] = {{1,2,3},{4,5,6},{7,8,9}}; // Creating a 2D Array [Space for the Tic Tac Toe]

    char player1[20];
    char player2[20];

    cout << "-----------TIC-TAC-TOE-----------" << endl << endl;

    cout << "Enter the name of the 1st player : ";
    cin.getline(player1,21,'\n');
    cout << "Enter the name of the 2nd player : ";
    cin.getline(player2,21,'\n');


    cout << "All the best !" << endl;
    cout << player1 << endl;
    cout << player2 << endl << endl;

    cout << player1 << " is player-1 so he/she will play first" << endl;
    cout << player2 << " is player-2 so he/she will play second" << endl << endl;

    cout << " ______________\n";
    cout << "|    |    |    |\n";
    cout << "| " << space[0][0] << "  | " << space[0][1] << "  " << "| " << space[0][2] << "  " << "|" << endl;
    cout << "|____|____|____|\n";
    cout << "|    |    |    |\n";
    cout << "| " << space[1][0] << "  | " << space[1][1] << "  " << "| " << space[1][2] << "  " << "|" << endl;
    cout << "|____|____|____|\n";
    cout << "|    |    |    |\n";
    cout << "| " << space[2][0] << "  | " << space[2][1] << "  " << "| " << space[2][2] << "  " << "|" << endl;
    cout << "|____|____|____|\n";


    return 0;
}