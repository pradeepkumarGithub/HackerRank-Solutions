def print_rangoli(size):
    # your code goes here
    alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for i in range(size - 1, -size, -1):
        row = ["-"] * (4 * size - 3)
        for j in range(size - abs(i)):
            row[2 * (size - 1 + j)] = alphabets[abs(i) + j]
            row[2 * (size - 1 - j)] = alphabets[abs(i) + j]
        print("".join(row))
    
if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)