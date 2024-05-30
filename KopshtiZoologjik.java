public class KopshtiZoologjik {
    private String emri;
    private String location;
    Kafsha[] Kafsha;
    private int index = 0;

    public KopshtiZoologjik(String emri, String location, int nr) {
        this.emri = emri;
        this.location = location;
        Kafsha = new Kafsha[nr];
    }

    public boolean ekziston(Kafsha k) {
        for (int i = 0; i < index; i++) {
            if (Kafsha[i].equals(k)) {
                return true;
            }
        }
        return false;
    }

    public void shtoKafshen(Kafsha k) {
        if (ekziston(k)) {
            System.out.println("Kafsha egziston");
            return;
        }
        if (index >= Kafsha.length) {
            System.out.println("Nuk ka vend ne varg");
            return;
        }
        Kafsha[index++] = k;
        System.out.println("Kafsha" + k + "u shtua me sukses");
    }

    public void shtoKafshen() {
        for (int i = 0; i < index; i++) {

            System.out.println(Kafsha[i]);
        }
    }

    public static void main(String[] args) {
        KopshtiZoologjik kz = new KopshtiZoologjik("Koala", "gilan", 12);
        Kafsha kz1 = new Kafsha("Mace", "elle", 12);
        Kafsha kz2 = new Kafsha("Mace", "elle", 12);
        Kafsha kz3 = new Kafsha("Mace", "lina", 12);
        Kafsha kz4 = new Kafsha("Mace", "linaa", 12);
        Kafsha kz5 = new Kafsha("Mace", "all", 12);
        kz.shtoKafshen(kz1);
        kz.shtoKafshen(kz2);
        kz.shtoKafshen(kz3);
        kz.shtoKafshen(kz4);
        kz.shtoKafshen(kz5);

    }
}
