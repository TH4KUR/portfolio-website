from PyQt5 import uic, QtWidgets
from PyQt5.QtWidgets import *
from PyQt5.QtGui import QPalette, QColor
from PyQt5.QtCore import Qt
import mysql.connector as ms


class MyGUI(QMainWindow):
    def __init__(self):
        super(MyGUI, self).__init__()
        uic.loadUi("lib.ui", self)
        self.show()
        self.isConnected = False
        self.pushButton.clicked.connect(self.connectDB)
        self.connect_db_button.clicked.connect(self.UseDB)
        self.viewTbBtn.clicked.connect(self.setTable)
        self.update_copies_btn.clicked.connect(self.updateBookCopies)
        self.doActionBtn.clicked.connect(self.uiActions)

        ## Disabling all buttons
        self.prohibit()

    def uiActions(self):
        if self.addBook_radio.isChecked():
            self.addBook()

        elif self.addMember_radio.isChecked():
            self.addMember()

        elif self.checkAvailability_radio.isChecked():
            self.checkAvailibilty()

        elif self.assignBook_radio.isChecked():
            self.assignBook()

        elif self.updateCopies_radio.isChecked():
            self.updateCopies()

    def addBook(self):
        self.stackedWidget.setCurrentWidget(self.add_book)
        isbn = self.book_isbn.text()
        name = self.book_name.text()
        genre = self.book_genre.text()
        author = self.book_author.text()
        price = self.book_price.text()
        copies = self.book_copies.text()
        
        self.cur.execute

    def addMember(self):
        print('add member')
    def checkAvailibilty(self):
        print('add availabe')
    def assignBook(self):
        print('add assign book')
    def updateCopies(self):
        self.groupBox.setEnabled(False)
        self.stackedWidget_2.setCurrentWidget(self.update_copies_screen)
        print('update book')

    
    def updateBookCopies(self):
        try:
            book_id = self.new_book_id.text()
            copies = str(self.new_book_copies.value())
            self.cur.execute(f'Update books set Copies = \'{copies}\' where ISBN = \'{book_id}\'')
            self.con.commit()
            message = QMessageBox()
            message.setText('The book copies where successfully updated!!')
            message.exec_()
            self.stackedWidget_2.setCurrentWidget(self.stats)
            self.groupBox.setEnabled(True)
        except Exception as e:
            message = QMessageBox()
            message.setText(f'An error occurred: {e}')
            message.exec_()


        

    def prohibit(self):
        self.label_database.setEnabled(False)
        self.heading2.setEnabled(False)
        self.databases_drop.setEnabled(False)
        self.connect_db_button.setEnabled(False)

    def hideLogin(self):
        self.stackedWidget.setCurrentWidget(self.actions_page)

    def UseDB(self):
        db = self.databases_drop.currentText()
        self.cur.execute(f"Use {db}")
        self.hideLogin()
        self.setTable("books")
        self.setTbDrop()

    def connectDB(self):
        try:
            host_ = self.lineEdit.text()
            username_ = self.lineEdit_2.text()
            password_ = self.lineEdit_3.text()

            self.con = ms.connect(host=host_, username=username_, password=password_)
            self.status.setText("Connected!")
            self.isConnected = True
            self.cur = self.con.cursor()

            self.enableDB()
            self.setDbDrop()

        except Exception as err:
            print(err)
            self.prohibit()
            self.status.setText("Error! Couldn't connect to DB")

    def setDbDrop(self):
        self.cur.execute("SHOW DATABASES")
        dbs = self.cur.fetchall()
        for i in dbs:
            self.databases_drop.addItem(i[0])

    def setTbDrop(self):
        self.cur.execute("SHOW Tables")
        tbs = self.cur.fetchall()
        for i in tbs:
            self.tables_drop.addItem(i[0])

    def enableDB(self):
        self.heading2.setEnabled(True)
        self.databases_drop.setEnabled(True)
        self.connect_db_button.setEnabled(True)

    def setTable(self, table):
        row = 0
        tableX = table
        if not table:
            tableX = self.tables_drop.currentText()

        self.cur.execute(f"SELECT * from {tableX}")
        data = self.cur.fetchall()
        self.tableWidget.setRowCount(len(data))
        for i in data:
            row += 1
            self.tableWidget.setItem(row, 0, QtWidgets.QTableWidgetItem(i[0]))
            self.tableWidget.setItem(row, 1, QtWidgets.QTableWidgetItem(i[1]))
            self.tableWidget.setItem(row, 2, QtWidgets.QTableWidgetItem(i[2]))
            self.tableWidget.setItem(row, 3, QtWidgets.QTableWidgetItem(i[3]))


app = QApplication([])
window = MyGUI()
app.exec_()
