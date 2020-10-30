# for line in open("sample.txt"):

# strsales = line.split()[-2]
# item = line.split('\t')[3]
# itemsales = "{0:<33}{1:>18}".format(item, strsales)
# print(strsales)
textname = '123.txt'
file = open(textname, 'w')
for line in [[1, 128, 1298039], [123388, 0, 2]]:
    file.write('{:>1} {:>3} {:>500}\n'.format(*line))
my_number = 0
file.write(f'A number -> {my_number:>20.5f}')
file.close()

if __name__ == "__main__":
    pass


# manually set up paper size
# manually design templates