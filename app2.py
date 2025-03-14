from flask import Flask, request, render_template, url_for
import mysql.connector as mc

app = Flask(__name__)


@app.route('/trendy mens')
def mens():
    return render_template('trendy mens1.html')

@app.route('/trendy women')
def women():
    return render_template('trendy women1.html')

@app.route('/buy_now')
def buy_now():
    return render_template('buy now.html')

@app.route('/process_payment', methods=['POST'])
def process_payment():
    name = request.form['name']
    email = request.form['email']
    phone_number = request.form['phone']
    address = request.form['address']
    state = request.form['state']

    # Connect to the database
    conn = mc.connect(
        host='localhost',
        user='root',
        password='A14201514e*',
        database='shopping_website'
    )
    cursor = conn.cursor()

    # Insert data into the database
    query = "INSERT INTO customers (name, email, phone_number, address, state) VALUES (%s, %s, %s, %s, %s)"
    values = (name, email, phone_number, address, state)
    cursor.execute(query, values)
    conn.commit()

    cursor.close()
    conn.close()

    return 'Order placed successfully'

if __name__ == '__main__':
    app.run(debug=True)
