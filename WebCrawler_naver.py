from bs4 import BeautifulSoup
from urllib.request import urlopen
import os

file_location = os.path.dirname(__file__) #file_location에 폴더 경로 저장
# print(file_location)

site = "네이버"                                               #사이트 지정
f_naver = open(file_location +"/" + site + ".txt", 'w')      #텍스트 파일 생성
terms_of_use = {}

terms_of_use_list = []
response = urlopen('https://policy.naver.com/rules/service_pre_20140317.html')
soup = BeautifulSoup(response, 'html.parser')
for div in soup.select("div.section"):
    terms_of_use_list.append(div.get_text())

for i in range(len(terms_of_use_list)):
    print(terms_of_use_list[i])
    f_naver.write(terms_of_use_list[i])
    terms_of_use[site] = terms_of_use_list

f_naver.close()