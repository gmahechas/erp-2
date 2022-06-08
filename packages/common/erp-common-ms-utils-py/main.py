from erp_common_py import Country


def main():
    c = Country('123', 'Colombia', 'COL')
    print(c.get_name())


if __name__ == '__main__':
    main()
