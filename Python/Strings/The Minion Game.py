def minion_game(string):
    # your code goes here
    vowels = "AEIOU"
    strLen = len(string)
    stuartScore, kevinScore = 0, 0
    
    for i in range(strLen):
        if string[i] in vowels:
            kevinScore += (strLen - i)
        else:
            stuartScore += (strLen -i)
    
    if stuartScore > kevinScore:
        print("Stuart", stuartScore)
    elif stuartScore < kevinScore:
        print("Kevin", kevinScore)
    else:
        print("Draw")

if __name__ == '__main__':
    s = input()
    minion_game(s)