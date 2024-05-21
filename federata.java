public class federata {
    private String emri;

    public federata(String emri) {
        this.emri = emri;
    }

    public String toString() {
        return "Federata me  emer" + emri;
    }

    public static void main(String[] args) {
        federata f = new federata("Federata e Kosoves");
        Sportisti s1 = new Sportisti(15, "Sportisti", 22, 'M');
        Sportisti s2 = new Sportisti(15, "Sportisti", 22, 'F');
        Sportisti s3 = new Sportisti(15, "Sportisti", 22, 'F');
        System.out.println(s1.toString());
        System.out.println();
        System.out.println(s3.toString());

    }
}
