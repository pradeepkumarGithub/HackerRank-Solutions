if __name__ == '__main__':
    records = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        records.append([name, score])
        
    secondLowestGrade = sorted(list(set([score for name, score in records])))[1]
    print(*sorted([name for name, score in records if score == secondLowestGrade]), sep='\n')
    
