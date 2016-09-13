class Speaker < User

  alias_attribute :link, :url

  has_many :talks

  default_scope -> { where('talks_count > 0') }

end
