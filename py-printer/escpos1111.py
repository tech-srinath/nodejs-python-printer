from escpos.connections import getNetworkPrinter


printer = getNetworkPrinter()(host='192.168.0.106')

printer.text("Hello World")
printer.lf()
