if __name__ == '__main__':
    N = int(input())
    list_ = []
    for i in range(N):
        command = input().split(" ")
        commandType = command[0]
        if commandType == "insert":
            list_.insert(int(command[1]), int(command[2]))
        elif commandType == "print":
            print(list_)
        elif commandType == "remove":
            list_.remove(int(command[1]))
        elif commandType == "append":
            list_.append(int(command[1]))   
        elif commandType == "sort":
            list_.sort()            
        elif commandType == "pop":
            list_.pop()
        elif commandType == "reverse":
            list_.reverse()
                
            
            
            
            
            
            
            
        
