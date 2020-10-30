import win32print

printer_name = win32print.GetDefaultPrinter()
hPrinter = win32print.OpenPrinter(printer_name)
hJob = win32print.StartDocPrinter(
    hPrinter, 1, ("test of raw data", None, "TEXT"))
win32print.WritePrinter(hPrinter, open("x_n1.txt", 'r').read())
win32print.EndDocPrinter(hPrinter)
win32print.ClosePrinter(hPrinter)
