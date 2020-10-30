from win32printing import Printer

font = {
    "height": 14,
}
with Printer(linegap=1) as printer:
    printer.text("title1", font_config=font)
    printer.text("title2", font_config=font)
    for x in range(3):
        printer.text("{:>8}repeat", font_config=font)

# cannot detect printers