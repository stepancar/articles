dt = {}

with open("frame_info.csv","r", encoding='utf-8')  as f:
    for line in f:
#         print(line,end="")
        info = line[:-1].split(",")
        st=info[0].split(".")
        fr_type=info[-1]
        fr_cnt = info[-2]
        ext=st[-1]
        st="*".join(st[0].split("_")[1:3])
#         print(info,st,ext)
        if ext not in dt:
            dt[ext]={}
        if st not in dt[ext]:
            dt[ext][st]={}
        dt[ext][st][fr_type]=fr_cnt

for ex in dt:
#     print("----------------------")
    for res in dt[ex]:
        p=dt[ex][res]["P"]
        i=dt[ex][res]["I"]
        b=0
        if "B" in dt[ex][res]:
            b=dt[ex][res]["B"]
        print(f"{ex},{res},{p},{b},{i}")

#     print("----------------------")
