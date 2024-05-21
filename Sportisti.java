public class Sportisti {
    private int id;
    private String emri;
    private int mosha;
    private char gjinia;

    public Sportisti(int id, String emri, int mosha, char gjinia) {
        this.id = id;
        this.emri = emri;
        this.mosha = mosha;
        this.gjinia = gjinia;
    }

    public int getId() {
        return id;
    }

    public String getEmri() {
        return emri;
    }

    public int getMosha() {
        return gjinia;
    }

    public char getGjinia() {
        return gjinia;
    }

    public void setEmri(String emri) {
        this.emri = emri;
    }

    public void setMosha(int mosha) {
        this.mosha = mosha;
    }

    public void setGjinia(char gjinia) {
        this.gjinia = gjinia;
    }

    @Override
    public String toString() {
        return id + ":" + emri + " " + (gjinia == 'M' ? "Mashkull" : "Femer") + "" + mosha + "vjeq";
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Sportisti) {
            Sportisti s = (Sportisti) obj;
            if (s.getId() == id) {
                return true;
            }
        }
        return false;
    }
}