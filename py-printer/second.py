import win32ui
import win32print
import win32con

INCH = 1440

hDC = win32ui.CreateDC()
hDC.CreatePrinterDC(win32print.GetDefaultPrinter())
hDC.StartDoc("Test doc")
hDC.StartPage()
hDC.SetMapMode(win32con.MM_TWIPS)
hDC.DrawText("TEST1", (INCH * 1, INCH * 0, INCH *  8, INCH * -2), win32con.DT_CENTER)
hDC.DrawText("TEST2", (INCH * 2, INCH * -1, INCH *  10, INCH * -2), win32con.DT_CENTER)
hDC.DrawText("TEST3", (INCH * 3, INCH * -1, INCH * 4, INCH * -3), win32con.DT_CENTER)
hDC.DrawText("TEST4", (INCH * 4, INCH * -1, INCH * 6, INCH * -4), win32con.DT_CENTER)
hDC.EndPage()
hDC.EndDoc()
