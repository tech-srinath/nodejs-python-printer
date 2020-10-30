import textwrap

List = [
    ["A1", "Some text that you want to write to a file, aligned in\n a column."],
    ["A2", "And this is a shorter text."]]

indention = 12
max_line_length = 30

file = open("tmp.txt", 'w')
for i in range(len(List)):

    out = List[i][0].ljust(indention, ' ')
    cur_indent = 0
    for line in List[i][1].split('\n'):
        for short_line in textwrap.wrap(line, max_line_length):
            out += ' ' * cur_indent + short_line.lstrip() + "\n"
            cur_indent = indention

    file.write(out)
