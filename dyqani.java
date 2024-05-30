public class dyqani {
    private String emri;
    Pajisja[] pajisjet;
    private int index = 0;

    public dyqani(String emri, int nr) {
        this.emri = emri;
        pajisjet = new Pajisja[nr];
    }

    public boolean ekziston(Pajisja p) {
        for (int i = 0; i < index; i++) {
            if (pajisjet[i].equals(p)) {
                return true;
            }
        }
        return false;
    }

    public void shtiPajisjen(Pajisja p) {
        if (ekziston(p)) {
            System.out.println("Pajisja egziston");
            return;
        }
        if (index >= pajisjet.length) {
            System.out.println("Nuk ka vend ne varg");
            return;
        }
        pajisjet[index++] = p;
        System.out.println("Pajisja" + p + "u shtua me sukses");
    }

    public void shtyPajisjet() {
        for (int i = 0; i < index; i++) {

            System.out.println(pajisjet[i]);
        }
    }

    public static void main(String[] args) {
        dyqani d = new dyqani("Neptun", 50);
        Pajisja p1 = new Pajisja("111-aaa", "Samsung", 220, 'F');
        Pajisja p2 = new Pajisja("111-aaa", "Lenovo", 220, 'F');
        Pajisja p3 = new Pajisja("111-aaa", "Samsung", 220, 'F');
        Pajisja p4 = new Pajisja("111-aaa", "Lenovo", 220, 'F');
        Pajisja p5 = new Pajisja("111-aaa", "Samsung", 220, 'L');

        d.shtiPajisjen(p1);
        d.shtiPajisjen(p2);
        d.shtiPajisjen(p3);
        d.shtiPajisjen(p4);
        d.shtiPajisjen(p5);
        System.out.println(d.ekziston(p2));
    }
}
