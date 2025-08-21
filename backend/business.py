def get_data():
    return "This data is coming from Flask Backend 🚀"
def get_data():
    try:
        with open("names.txt", "r") as f:
            names = f.read() .splitlines()  # list of names line by line
        return names
    except Exception as e:
        return [f"Error reading file: {e}"]

